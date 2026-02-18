"use server";
import { DeleteResult, ObjectId } from "mongodb";
import getDb from "../db";
import { sendEmail } from "../nodemailer";
import { Email } from "../type";

export async function getAllMessages(): Promise<
  | {
      success: true;
      data: (Email & { _id: string })[];
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    const { emails } = await getDb();
    const messagesData = await emails
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Convert ObjectId to string for serialization
    const serialized = messagesData.map((m) => ({
      ...m,
      _id: m._id.toString(),
    }));
    return { success: true, data: serialized };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

export async function deleteMessageById({
  id,
  adminEmail,
}: {
  id: string;
  adminEmail: string;
}): Promise<
  | {
      success: true;
      data: DeleteResult;
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    const { emails, users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    const result = await emails.deleteOne({ _id: new ObjectId(id) });
    return { success: true, data: result };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

export async function contactEmail({
  first_name,
  last_name,
  email,
  phone,
  message,
}: Email) {
  const { users, emails } = await getDb();

  const admins = await users.find({ role: "Admin" }).toArray();
  const adminEmail = admins.map((admin) => admin.email);
  const [_, emailSendResult] = await Promise.all([
    emails.insertOne({
      first_name,
      last_name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    }),
    sendEmail({
      to: adminEmail,
      subject: "New project proposal",
      text: "New project proposal",
      html: `
        <h1>New project proposal</h1>
        <p><b>${first_name} ${last_name}</b> sent a new project proposal</p>
        <p>Email: <b>${email}</b></p>
        <p>Phone: <b>${phone}</b></p>
        <p>Message: <b>${message}</b></p>
        <p>This message is sent for testing purposes only. Applied only on contact form, sent to all admins.</p>
        `,
    }),
  ]);

  return emailSendResult;
}

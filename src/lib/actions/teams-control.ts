"use server";
import { DeleteResult, ObjectId } from "mongodb";
import getDb from "../db";
import { Team, TeamWithId } from "../type";
import { sendEmail } from "../nodemailer";

export async function getAllTeams(): Promise<
  | {
      success: true;
      data: TeamWithId[];
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    const { teams } = await getDb();
    const teamsData = await teams.find({}).toArray();
    return { success: true, data: teamsData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

export async function deleteTeamById({
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
    // Only admin has delete access
    const { teams, users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    const teamsData = await teams.deleteOne({ _id: new ObjectId(id) });
    return { success: true, data: teamsData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

export async function addTeam({ email, data }: { email: string; data: Team }) {
  const { teams, users } = await getDb();

  // only admin and team has access
  const user = await users.findOne({ email });
  if (!user || (user.role !== "Admin" && user.role !== "Team")) {
    return {
      success: false,
      error: "Only admin and team can perform this action",
    };
  }

  // Insert on db
  const result = await teams.insertOne({
    ...data,
    createdAt: new Date().toISOString(),
  });
  if (result.insertedId) {
    await sendEmail({
      to: email,
      subject: "Team Added",
      text: "Team member added successfully",
      html: `
      <h1>Team member added successfully</h1>
      <p><b>${data.name}</b> is now your team member</p>
      <p>Team ID: <b>${result.insertedId.toString()}</b></p>
      <p>This message is sent for testing purposes only. Applied only on addTeam function.</p>

      `,
    });
    return { success: true, data: result.insertedId.toString() };
  }
  return { success: false, error: "Failed to add team" };
}

export async function updateTeam({
  adminEmail,
  id,
  data,
}: {
  adminEmail: string;
  id: string;
  data: Partial<Team>;
}): Promise<
  | {
      success: true;
      data: number;
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    const { teams, users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    const result = await teams.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date().toISOString() } },
    );
    if (result.modifiedCount) {
      return { success: true, data: result.modifiedCount };
    }
    return { success: false, error: "Failed to update team" };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

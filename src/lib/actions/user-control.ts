"use server";

import { DeleteResult, ObjectId, UpdateResult } from "mongodb";
import getDb from "../db";
import { UserWithId, UserRole } from "../type";

// OAuth Signin
export async function oAuthSignin({
  name,
  email,
  image,
  firebaseUid,
}: {
  name: string;
  email: string;
  image: string;
  firebaseUid: string;
}) {
  try {
    // Get users collection from database
    const { users } = await getDb();
    /**
     * OAuth Signin is used here so user may or may not be a new user.
     * there isn't any separate options to identify whether user is creating a new account or signin in to the existing account.
     * So,
     * If user exists then simply pass the user id, role and dates.
     * If user doesn't exits then create a new user.
     */
    const existingUser = await users.findOne({ email }); // Check if user exists
    if (existingUser) {
      return {
        success: true,
        data: {
          userId: existingUser._id.toString(),
          role: existingUser.role,
          createdAt: existingUser.createdAt,
          updatedAt: existingUser.updatedAt,
        },
      };
    }

    // User doesn't exists at this level, so we create a new one.
    const newUser = {
      name: name.toString(),
      email: email.toString(),
      image: image.toString(),
      firebaseUid: firebaseUid.toString(),
      role: "User" as UserRole,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await users.insertOne(newUser);

    return {
      success: true,
      data: {
        userId: result.insertedId.toString(),
        role: newUser.role,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      },
    };
  } catch (error) {
    const msg =
      error instanceof Error
        ? error.message
        : "Unknown error happened during OAuth sign-in";
    // console.error("oAuthSignin error:", error);
    return { success: false, error: msg };
  }
}

// Get all users
export async function getAllUsers(): Promise<
  { success: true; data: UserWithId[] } | { success: false; error: string }
> {
  try {
    const { users } = await getDb();
    const allUsers = await users.find({}).toArray();
    return { success: true, data: allUsers };
  } catch (error) {
    const msg =
      error instanceof Error
        ? error.message
        : "Unknown error happened during getting all users";
    // console.error("getAllUsers error:", error);
    return { success: false, error: msg };
  }
}

export async function deleteUserById({
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
    const { users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }
    if (isAdmin._id.toString() === id) {
      return { success: false, error: "Admin can't delete themselves" };
    }

    const usersData = await users.deleteOne({ _id: new ObjectId(id) });
    return { success: true, data: usersData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

export async function updateUserRoleById({
  id,
  adminEmail,
  role,
}: {
  id: string;
  adminEmail: string;
  role: UserRole;
}): Promise<
  | {
      success: true;
      data: UpdateResult;
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    // Only admin has update access
    const { users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    if (isAdmin._id.toString() === id) {
      return { success: false, error: "Admin can't update themselves" };
    }

    const usersData = await users.updateOne({ _id: new ObjectId(id) }, { $set: { role, updatedAt: new Date().toISOString() } });
    return { success: true, data: usersData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

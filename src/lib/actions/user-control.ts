"use server";

import getDb from "../db";
import { UserRole } from "../type";

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
      role: "Unauthorized" as UserRole,
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

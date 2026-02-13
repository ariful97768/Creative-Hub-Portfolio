"use server";
import { DeleteResult, ObjectId } from "mongodb";
import getDb from "../db";
import { TeamWithId } from "../type";

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

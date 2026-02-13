"use server";
import { DeleteResult, ObjectId } from "mongodb";
import getDb from "../db";
import { ProjectWithId } from "../type";

export async function getAllProjects(): Promise<
  | {
      success: true;
      data: ProjectWithId[];
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    const { projects } = await getDb();
    const projectsData = await projects.find({}).toArray();
    return { success: true, data: projectsData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

export async function deleteProjectById({
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
    const { projects, users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    const projectsData = await projects.deleteOne({ _id: new ObjectId(id) });
    return { success: true, data: projectsData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

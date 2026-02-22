"use server";
import { DeleteResult, ObjectId } from "mongodb";
import getDb from "../db";
import { Project, ProjectWithId } from "../type";

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

export async function addProject({
  email,
  data,
}: {
  email: string;
  data: Project;
}) {
  const { projects, users } = await getDb();

  // only admin and team has access
  const user = await users.findOne({ email });
  if (!user || (user.role !== "Admin" && user.role !== "Team")) {
    return {
      success: false,
      error: "Only admin and team can perform this action",
    };
  }

  const result = await projects.insertOne({
    ...data,
    createdAt: new Date().toISOString(),
  });
  if (result.insertedId) {
    return { success: true, data: result.insertedId.toString() };
  }
  return { success: false, error: "Failed to add project" };
}

export async function updateProject({
  adminEmail,
  id,
  data,
}: {
  adminEmail: string;
  id: string;
  data: Partial<Project>;
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
    const { projects, users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    const result = await projects.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date().toISOString() } },
    );
    if (result.modifiedCount) {
      return { success: true, data: result.modifiedCount };
    }
    return { success: false, error: "Failed to update project" };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

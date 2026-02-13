"use server";
import { DeleteResult, ObjectId } from "mongodb";
import getDb from "../db";
import { TestimonialWithId } from "../type";

export async function getAllReviews(): Promise<
  | {
      success: true;
      data: TestimonialWithId[];
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    const { testimonials } = await getDb();
    const reviewsData = await testimonials
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    return { success: true, data: reviewsData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

export async function deleteReviewById({
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
    const { testimonials, users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    const reviewsData = await testimonials.deleteOne({ _id: new ObjectId(id) });
    return { success: true, data: reviewsData };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

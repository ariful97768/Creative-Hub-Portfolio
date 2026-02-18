"use server";
import { DeleteResult, ObjectId } from "mongodb";
import getDb from "../db";
import { Testimonial, TestimonialWithId } from "../type";

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

export async function addReview({
  email,
  data,
}: {
  email: string;
  data: Testimonial;
}) {
  const { testimonials, users } = await getDb();

  // only admin and team has access
  const user = await users.findOne({ email });
  if (!user || (user.role !== "Admin" && user.role !== "Team")) {
    return {
      success: false,
      error: "Only admin and team can perform this action",
    };
  }

  const result = await testimonials.insertOne({
    ...data,
    createdAt: new Date().toISOString(),
  });
  if (result.insertedId) {
    return { success: true, data: result.insertedId.toString() };
  }
  return { success: false, error: "Failed to add review" };
}

export async function updateReview({
  adminEmail,
  id,
  data,
}: {
  adminEmail: string;
  id: string;
  data: Partial<Testimonial>;
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
    const { testimonials, users } = await getDb();
    const isAdmin = await users.findOne({ email: adminEmail, role: "Admin" });

    if (!isAdmin || isAdmin.role !== "Admin") {
      return { success: false, error: "Only admin can perform this action" };
    }

    const result = await testimonials.updateOne(
      { _id: new ObjectId(id) },
      { $set: data },
    );
    if (result.modifiedCount) {
      return { success: true, data: result.modifiedCount };
    }
    return { success: false, error: "Failed to update review" };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: msg };
  }
}

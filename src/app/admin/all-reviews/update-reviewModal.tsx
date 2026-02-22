"use client";
import Modal from "@/components/ui/modal";
import { useAuth } from "@/context/auth.context";
import { updateReview } from "@/lib/actions/review-control";
import { uploadImage } from "@/lib/upload-image";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";
import { Testimonial } from "@/lib/type";
import Swal from "sweetalert2";
import TestimonialForm from "@/components/forms/testimonial";

export default function UpdateReviewModal({
  isOpen,
  setIsOpen,
  data,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  data: Testimonial & { _id: string };
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const imageFile = formData.get("image") as File;
      const name = formData.get("name") as string;
      const country = formData.get("country") as string;
      const rating = Number(formData.get("rating"));
      const company = formData.get("company") as string;
      const position = formData.get("position") as string;
      const review = formData.get("review") as string;

      if (!user || !user.email) {
        throw new Error(
          "Email not found. Please refresh the page or signin again",
        );
      }

      // Build update data — only include changed fields
      const updateData: Record<string, unknown> = {};
      if (name !== data.name) updateData.name = name;
      if (country !== data.country) updateData.country = country;
      if (rating !== data.rating) updateData.rating = rating;
      if (company !== data.company) updateData.company = company;
      if (position !== data.position) updateData.position = position;
      if (review !== data.review) updateData.review = review;

      // Handle image upload if a new file is selected
      if (imageFile && imageFile.size > 0) {
        const imageUrl = await uploadImage(imageFile);
        if (!imageUrl.success) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: imageUrl.message || "Image upload failed!",
          });
          return;
        }
        updateData.image = imageUrl.data.url;
      }

      // Check if there are any changes
      if (Object.keys(updateData).length === 0) {
        Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "No fields were modified.",
        });
        return;
      }

      const res = await updateReview({
        adminEmail: user.email,
        id: data._id.toString(),
        data: updateData,
      });

      if (!res.success) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res.error || "Failed to update review!",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Review updated successfully!",
      });

      // Close modal and refresh page data for updated content
      closeModal();
      router.refresh();
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Unknown error happened while updating review!";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: msg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title="Update Testimonial"
      maxWidth="max-w-xl"
    >
      <TestimonialForm
        action="update"
        defaultValue={data}
        handleSubmit={handleSubmit}
        loading={loading}
        setIsOpen={setIsOpen}
      />
    </Modal>
  );
}

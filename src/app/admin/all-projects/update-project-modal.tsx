"use client";
import Modal from "@/components/ui/modal";
import { useAuth } from "@/context/auth.context";
import { uploadImage } from "@/lib/upload-image";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";
import { Project } from "@/lib/type";
import Swal from "sweetalert2";
import ProjectForm from "@/components/forms/project";
import { updateProject } from "@/lib/actions/projects-control";

export default function UpdateProjectModal({
  isOpen,
  setIsOpen,
  data,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  data: Project & { _id: string };
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
      const clientCountry = formData.get("country") as string;
      const title = formData.get("title") as string;
      const technologies = (formData.get("technologies") as string).split(",");
      const link = formData.get("link") as string;
      const description = formData.get("description") as string;

      if (!user || !user.email) {
        throw new Error(
          "Email not found. Please refresh the page or signin again",
        );
      }

      // Build update data — only include changed fields
      const updateData: Record<string, unknown> = {};
      if (clientCountry !== data.clientCountry)
        updateData.clientCountry = clientCountry;
      if (title !== data.title) updateData.title = title;

      // Technologies is an array of string store on db. So we must convert it to a string before checking.
      // `technologies.join(",")` this converts the values from input to a string
      // `data.technologies.join(",")` this converts the data came from db to a string
      if (technologies.join(",") !== data.technologies.join(","))
        updateData.technologies = technologies;

      if (link !== data.link) updateData.link = link;
      if (description !== data.description)
        updateData.description = description;

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

      // Insert updated content to the db
      const res = await updateProject({
        adminEmail: user.email,
        id: data._id.toString(),
        data: updateData,
      });

      if (!res.success) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res.error || "Failed to update Project!",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Project updated successfully!",
      });

      // Close modal and refresh page data for updated content
      closeModal();
      router.refresh();
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Unknown error happened while updating project!";
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
      title="Update Project"
      maxWidth="max-w-xl"
    >
      <ProjectForm
        action="update"
        handleSubmit={handleSubmit}
        loading={loading}
        setIsOpen={setIsOpen}
        defaultValue={data}
      />
    </Modal>
  );
}

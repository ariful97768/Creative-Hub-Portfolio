"use client";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import Textarea from "@/components/ui/textarea";
import { useAuth } from "@/context/auth.context";
import { uploadImage } from "@/lib/upload-image";
import { Upload, User, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";
import { Team } from "@/lib/type";
import Swal from "sweetalert2";
import { updateTeam } from "@/lib/actions/teams-control";
import TeamForm from "@/components/forms/team";

export default function UpdateTeamModal({
  isOpen,
  setIsOpen,
  data,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  data: Team & { _id: string };
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  // Handle form submit
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const imageFile = formData.get("image") as File;
      const name = formData.get("name") as string;
      const about = formData.get("about") as string;

      if (!user || !user.email) {
        throw new Error(
          "Email not found. Please refresh the page or signin again",
        );
      }

      // Build update data - only include changed fields
      const updateData: Record<string, unknown> = {};
      if (name !== data.name) updateData.name = name;
      if (about !== data.about) updateData.about = about;

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

      // Insert updated document to the database
      const res = await updateTeam({
        adminEmail: user.email,
        id: data._id.toString(),
        data: updateData,
      });

      if (!res.success) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res.error || "Failed to update team!",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Team updated successfully!",
      });

      // Close modal and refresh page data for updated content
      closeModal();
      router.refresh();
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Unknown error happened while updating team!";
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
      title="Update Team Member"
      maxWidth="max-w-xl"
    >
      <TeamForm
        action="update"
        handleSubmit={handleSubmit}
        loading={loading}
        setIsOpen={setIsOpen}
        defaultValue={data}
      />
    </Modal>
  );
}

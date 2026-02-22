"use client";
import { SubmitEvent, useState } from "react";
import { Plus } from "lucide-react";
import Modal from "@/components/ui/modal";
import Swal from "sweetalert2";
import { useAuth } from "@/context/auth.context";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/lib/upload-image";
import { addTeam } from "@/lib/actions/teams-control";
import TeamForm from "@/components/forms/team";

export default function AddTeamModal() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle Form Submit
  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Extract form data
    const formData = new FormData(e.currentTarget);
    try {
      const data = {
        name: formData.get("name") as string,
        image: formData.get("image") as File,
        about: formData.get("about") as string,
      };
      console.log(data);
      if (!data.image) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Image is required!",
        });
        return;
      }

      // Upload image to imgbb using uploadImage function.
      // It sends data to /api/upload-image route, and then backend handles the upload process.
      const imageUrl = await uploadImage(data.image);
      if (!imageUrl.success) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: imageUrl.message || "Image upload failed!",
        });
        return;
      }

      if (!user || !user.email) {
        throw new Error(
          "Email not found. Please refresh the page or signin again",
        );
      }

      // add team to database
      const team = await addTeam({
        email: user.email,
        data: { ...data, image: imageUrl.data.url },
      });

      // Database fail or access denied
      if (!team.success) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: team.error || "Failed to add team!",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Team added successfully!",
      });
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      // fire error message
      const msg =
        error instanceof Error
          ? error.message
          : "Unknown error happened while adding new team!";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: msg,
      });

      // reset loading state
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-lg cursor-pointer font-semibold shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
      >
        <Plus size={18} strokeWidth={2.5} />
        Add New
      </button>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add New Member"
        maxWidth="max-w-xl"
      >
        <TeamForm
          action="add"
          handleSubmit={handleSubmit}
          loading={loading}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </>
  );
}

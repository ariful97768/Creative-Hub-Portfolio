"use client";
import { useAuth } from "@/context/auth.context";
import { deleteMessageById } from "@/lib/actions/contact-email";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function DeleteMessage({ id }: { id: string }) {
  const { user } = useAuth();
  const router = useRouter();

  const handleDelete = async () => {
    Swal.fire({
      title: "Delete this message?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          if (!user?.email)
            throw new Error(
              "User email not found. Please refresh the page or signin again",
            );
          const result = await deleteMessageById({
            id,
            adminEmail: user.email,
          });
          if (!result.success) throw new Error(result.error);
          Swal.fire({
            title: "Deleted!",
            text: "Message has been deleted.",
            icon: "success",
          });
          router.refresh();
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <button
      className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 cursor-pointer"
      onClick={handleDelete}
      title="Delete message"
    >
      <Trash2 size={18} />
    </button>
  );
}

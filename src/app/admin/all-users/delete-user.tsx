"use client";
import { useAuth } from "@/context/auth.context";
import { deleteUserById } from "@/lib/actions/user-control";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function DeleteUser({ id }: { id: string }) {
  const { user } = useAuth();
  const router = useRouter();

  const deleteUser = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
              "Email not found. Please refresh the page or signin again",
            );
          const result = await deleteUserById({ id, adminEmail: user.email });
          router.refresh();
          if (!result.success) throw new Error(result.error);
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
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
      className="p-2 hover:bg-red-500 transition-all duration-300 cursor-pointer rounded-full bg-red-400"
      onClick={deleteUser}
    >
      <Trash className="text-white" size={18} />
    </button>
  );
}

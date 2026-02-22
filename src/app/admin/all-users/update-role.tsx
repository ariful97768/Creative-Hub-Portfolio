"use client";
import { useState } from "react";
import { UserRole } from "@/lib/type";
import { ArrowDown } from "lucide-react";
import Swal from "sweetalert2";
import { useAuth } from "@/context/auth.context";
import { useRouter } from "next/navigation";
import { updateUserRoleById } from "@/lib/actions/user-control";

const roles: UserRole[] = ["Admin", "Team", "User"];

export default function UpdateRole({
  id,
  role,
}: {
  id: string;
  role: UserRole;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState<UserRole>(role);

  const handleUpdate = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, update it!",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          if (!user?.email)
            throw new Error(
              "Email not found. Please refresh the page or signin again",
            );
          const updateResult = await updateUserRoleById({
            id,
            adminEmail: user.email,
            role: newRole,
          });
          router.refresh();
          if (!updateResult.success) throw new Error(updateResult.error);
          Swal.fire({
            title: "Updated!",
            text: "User role has been updated.",
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

    setOpen(false);
  };

  return (
    <>
      <button
        className="flex items-center gap-2 cursor-pointer font-medium"
        onClick={() => setOpen(true)}
      >
        {role.toUpperCase()} <ArrowDown size={16} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl p-6 w-80 space-y-4">
            <h3 className="text-lg font-bold">Update Role</h3>
            <p className="text-sm text-gray-500">
              Update the role of this user
            </p>

            <div className="space-y-2">
              <label htmlFor="role-select" className="text-sm font-medium">
                Role
              </label>
              <select
                id="role-select"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value as UserRole)}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

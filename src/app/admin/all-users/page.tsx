export const dynamic = "force-dynamic";

import { getAllUsers } from "@/lib/actions/user-control";
import Image from "next/image";
import DeleteUser from "./delete-user";
import UpdateRole from "./update-role";

const defaultImg = "/default-avatar.png";

export default async function AllUsersPage() {
  const users = await getAllUsers();
  if (!users.success) {
    return <div>{users.error}</div>;
  }
  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">All Users</h1>
        <p className="text-gray-500">Manage all users</p>
      </div>
      <div className="mt-5 mx-5 overflow-x-auto bg-white rounded-md border border-gray-400">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-3 text-center">No.</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3 whitespace-nowrap">Updated</th>
              <th className="px-4 py-3 whitespace-nowrap">Joined</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user, idx) => (
              <tr
                className="border-b border-gray-300 odd:bg-light-blue even:bg-light-red"
                key={user._id.toString()}
              >
                <td className="px-4 py-3 text-center font-semibold">
                  {idx + 1}
                </td>
                <td className="px-4 py-3">
                  <Image
                    height={40}
                    width={40}
                    className="rounded-full object-cover"
                    src={user.image || defaultImg}
                    alt="Profile"
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <UpdateRole id={user._id.toString()} role={user.role} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {new Date(user.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    day: "2-digit",
                    month: "short",
                    timeZone: "Asia/Dhaka",
                  })}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    day: "2-digit",
                    month: "short",
                    timeZone: "Asia/Dhaka",
                  })}
                </td>
                <td className="px-4 py-3">
                  <DeleteUser id={user._id.toString()} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

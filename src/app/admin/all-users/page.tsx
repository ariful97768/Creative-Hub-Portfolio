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
      <div className="border max-w-max mt-5 mx-5 border-gray-400 overflow-x-auto text-left bg-white rounded-md">
        <table>
          <thead>
            <tr className="gap-5 flex">
              <th className="w-20 h-10 text-center">No.</th>
              <th className="w-20 h-10">Image</th>
              <th className="w-40 h-10">Name</th>
              <th className="w-60 h-10">Email</th>
              <th className="w-40 h-10">Role</th>
              <th className="w-40 h-10">Last updated</th>
              <th className="w-40 h-10">Joined</th>
              <th className="w-25 h-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user, idx) => (
              <tr
                className="border-b flex gap-5 h-16 odd:bg-light-blue even:bg-light-red border-gray-300 border-collapse"
                key={user._id.toString()}
              >
                <th className="w-20 h-10 text-center">{idx + 1}</th>
                <td className="overflow-hidden w-20 h-10">
                  <Image
                    height={40}
                    width={40}
                    className="rounded-full  object-cover"
                    src={user.image || defaultImg}
                    alt="Profile"
                  />
                </td>
                <td className="w-40 h-10">{user.name}</td>
                <td className="w-60 h-10">{user.email}</td>
                <td className="w-40 h-10">
                  <UpdateRole id={user._id.toString()} role={user.role} />
                </td>
                <td className="w-40 h-10">
                  {new Date(user.updatedAt).toLocaleDateString()}
                </td>
                <td className="w-40 h-10">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td>
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

import auth from "@/lib/firebase.config";
import { signOut } from "firebase/auth";

export default function Unauthorized() {
  return (
    <section className="h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
      <p className="text-gray-500">
        You do not have permission to access the admin dashboard.
      </p>
      <button
        onClick={() => signOut(auth)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:cursor-pointer"
      >
        Sign out
      </button>
    </section>
  );
}

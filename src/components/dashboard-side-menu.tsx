"use client";
import auth from "@/lib/firebase.config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function DashboardSideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-64 min-h-[calc(100vh-246px)] p-10 flex flex-col gap-5 bg-light-blue">
      <Link
        className="text-lg bg-light-yellow px-3 py-2 rounded-md"
        href="/admin/all-users"
      >
        All Users
      </Link>
      <Link
        className="text-lg bg-light-yellow px-3 py-2 rounded-md"
        href="/admin/all-projects"
      >
        Projects
      </Link>
      <Link
        className="text-lg bg-light-yellow px-3 py-2 rounded-md"
        href="/admin/all-teams"
      >
        Teams
      </Link>
      <Link
        className="text-lg bg-light-yellow px-3 py-2 rounded-md"
        href="/admin/all-reviews"
      >
        Reviews
      </Link>
      <Link
        className="text-lg bg-light-yellow px-3 py-2 rounded-md"
        href="/admin/all-messages"
      >
        Messages
      </Link>
      <div className="mt-16 flex flex-col justify-end">
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

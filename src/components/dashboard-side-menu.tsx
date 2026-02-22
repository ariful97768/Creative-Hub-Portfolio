"use client";
import auth from "@/lib/firebase.config";
import { signOut } from "firebase/auth";
import {
  FolderKanban,
  LogOut,
  Mail,
  PanelLeftClose,
  PanelLeftOpen,
  Star,
  UserRound,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardSideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(window.innerWidth > 768);
  }, []);
  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "w-46" : "w-16"} h-[calc(100dvh-80px)] lg:h-[calc(100dvh-92px)] sticky top-20 lg:top-23 rounded-t-md p-3 flex flex-col gap-1 bg-light-blue z-10 overflow-hidden`}
    >
      <div
        className={`flex mt-5 mb-5 ${isOpen ? "justify-end" : "justify-center"}`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <PanelLeftClose className="w-5 h-5" />
          ) : (
            <PanelLeftOpen className="w-5 h-5" />
          )}
        </button>
      </div>
      <Link
        className="flex items-center gap-2 py-2 px-3 hover:bg-accent/15 text-sm md:text-lg rounded-md whitespace-nowrap"
        href="/admin/profile"
      >
        <UserRound className="w-5 h-5 shrink-0" />
        <span
          className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          Profile
        </span>
      </Link>
      <Link
        className="flex items-center gap-2 py-2 px-3 hover:bg-accent/15 text-sm md:text-lg rounded-md whitespace-nowrap"
        href="/admin/all-projects"
      >
        <FolderKanban className="w-5 h-5 shrink-0" />
        <span
          className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          Projects
        </span>
      </Link>
      <Link
        className="flex items-center gap-2 py-2 px-3 hover:bg-accent/15 text-sm md:text-lg rounded-md whitespace-nowrap"
        href="/admin/all-teams"
      >
        <Users className="w-5 h-5 shrink-0" />
        <span
          className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          Teams
        </span>
      </Link>
      <Link
        className="flex items-center gap-2 py-2 px-3 hover:bg-accent/15 text-sm md:text-lg rounded-md whitespace-nowrap"
        href="/admin/all-reviews"
      >
        <Star className="w-5 h-5 shrink-0" />
        <span
          className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          Reviews
        </span>
      </Link>
      <Link
        className="flex items-center gap-2 py-2 px-3 hover:bg-accent/15 text-sm md:text-lg rounded-md whitespace-nowrap"
        href="/admin/all-messages"
      >
        <Mail className="w-5 h-5 shrink-0" />
        <span
          className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          Messages
        </span>
      </Link>
      <div className="mt-16 flex flex-col justify-end">
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white py-2 px-3 rounded-md flex items-center gap-2"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span
            className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            LogOut
          </span>
        </button>
      </div>
    </div>
  );
}

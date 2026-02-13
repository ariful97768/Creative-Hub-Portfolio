"use client";
import { ReactNode, useEffect, useState } from "react";
import Login from "./login";
import { useAuth } from "@/context/auth.context";
import LoadingSpinner from "@/components/ui/loading";
import { UserRole } from "@/lib/type";
import Unauthorized from "@/components/unauthorized";
import DashboardSideMenu from "@/components/dashboard-side-menu";

export default function AdminLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const { user, loader } = useAuth();
  const [role, setRole] = useState<UserRole | null>(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    // If user.uid from firebase user object doesn't exist then user is not signed in.
    // We restrict the api call
    if (!user?.uid) {
      setRole(null);
      setRoleLoading(false);
      return;
    }

    setRoleLoading(true);

    fetch("/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        firebaseUid: user.uid,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch user: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setRole(data.data.role ?? null);
      })
      .catch((err) => {
        console.error("Error fetching user role:", err);
        setRole(null);
      })
      .finally(() => setRoleLoading(false));
  }, [user]);

  // Show spinner while Firebase auth or role fetch is in progress
  if (loader || roleLoading) {
    return <LoadingSpinner />;
  }

  // Show login page if user is not signed in
  if (!user || !user.uid) {
    return <Login />;
  }

  // Grant access only if user role is admin or team
  if (role === "Admin" || role === "Team") {
    return (
      <main className="flex">
        <DashboardSideMenu />
        <div className="flex-1">{children}</div>
      </main>
    );
  }

  // Show access denied page if user is not an admin
  return <Unauthorized />;
}

"use client";

import { useAuth } from "@/context/auth.context";
import { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { KeyRound, Mail, Shield, User } from "lucide-react";

export default function ProfilePage() {
  const { user, resetPassword } = useAuth();
  const [isResetting, setIsResetting] = useState(false);

  const handleResetPassword = async () => {
    if (!user?.email || isResetting) return;
    setIsResetting(true);

    try {
      await resetPassword(user.email);
      Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: "A password reset link has been sent to your email address.",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send reset email";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <section className="py-10 px-5">
      <div className="max-w-lg mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Profile Header */}
        <div className="bg-linear-to-br from-primary/10 to-accent/10 p-8 flex flex-col items-center gap-4">
          {user?.photoURL ? (
            <Image
              src={user.photoURL}
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={48} className="text-gray-400" />
            </div>
          )}
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">
              {user?.displayName || "Admin"}
            </h2>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6 space-y-4 break-all">
          <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
            <Mail size={18} className="text-primary shrink-0" />
            <div>
              <p className="text-xs text-gray-400 font-medium">Email</p>
              <p className="text-gray-700">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
            <Shield size={18} className="text-primary shrink-0" />
            <div>
              <p className="text-xs text-gray-400 font-medium">Account ID</p>
              <p className="text-gray-700 font-mono text-xs">{user?.uid}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 pt-0">
          <button
            onClick={handleResetPassword}
            disabled={isResetting}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 sm:py-3 px-3 sm:px-5 rounded-lg hover:bg-primary/90 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <KeyRound size={18} />
            {isResetting ? "Sending..." : "Reset Password"}
          </button>
          <p className="text-xs text-gray-400 text-center mt-2">
            A password reset link will be sent to your email
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
import Input from "@/components/ui/input";
import { useAuth } from "@/context/auth.context";
import { SubmitEvent, useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const { signInWithEmailPassword, setUser, setLoader } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleSignin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSigningIn) return; // Prevent double-clicks
    setIsSigningIn(true);
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill all fields",
      });
      return;
    }
    try {
      // Sign in with Email and Password
      const result = await signInWithEmailPassword({ email, password });
      const user = result.user;

      // Upsert: creates a new user document only if one doesn't exist
      await fetch("/api/user", {
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
      });

      setUser(user);
    } catch (error) {
      setLoader(false);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unknown error happened while signing in";
      const msg = errorMessage.includes("auth/email-already-in-use")
        ? "Email already in use"
        : errorMessage.includes("auth/wrong-password")
          ? "Wrong password"
          : errorMessage.includes("auth/user-not-found")
            ? "User not found"
            : errorMessage;

      Swal.fire({
        icon: "error",
        title: "Error",
        text: msg,
      });
      console.error("Google sign-in error:", errorMessage);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-246px)]">
      <div className="w-full max-w-md mx-auto">
        <form
          className=" flex flex-col gap-5 w-full max-w-md p-5 rounded-lg bg-light-blue"
          onSubmit={handleGoogleSignin}
        >
          <Input
            placeholder="Email"
            type="email"
            required
            name="email"
            label="Email"
          />
          <Input
            placeholder="Password"
            type="password"
            min={6}
            required
            name="password"
            label="Password"
          />

          <button
            type="submit"
            className="bg-primary mt-5 text-white px-5 py-2 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}

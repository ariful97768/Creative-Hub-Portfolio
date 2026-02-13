"use client";
import googleImg from "@/assets/googleLogo.png";
import { useAuth } from "@/context/auth.context";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const { signInWithGoogle, setUser, setLoader } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleSignin = async () => {
    if (isSigningIn) return; // Prevent double-clicks
    setIsSigningIn(true);

    try {
      // Sign in with Google pop-up window
      const result = await signInWithGoogle();
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
      alert(errorMessage);
      console.error("Google sign-in error:", errorMessage);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <section className="h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-10">
        Sign In With Google
      </h1>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={handleGoogleSignin}
          disabled={isSigningIn}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 px-5 py-3 rounded-md shadow-md border border-gray-200 font-semibold max-w-max disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image className="w-6" src={googleImg} alt="Google" />
          {isSigningIn ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </section>
  );
}

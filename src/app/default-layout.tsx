"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AuthProvider from "@/context/auth.context";
import ReactLenis from "lenis/react";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
      >
        <Header />
        {children}
        <Footer />
      </ReactLenis>
    </AuthProvider>
  );
}

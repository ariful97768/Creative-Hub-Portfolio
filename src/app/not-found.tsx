import Link from "next/link";
import Button from "@/components/ui/button";
import { Home, MoveRight } from "lucide-react";
import * as motion from "motion/react-client";

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-linear-to-b from-bgGradient/30 to-white">
      {/* Floating background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-bgGradient/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-(family-name:--font-orbitron) text-[80px] sm:text-[160px] md:text-[200px] font-bold leading-none bg-linear-to-b from-primary to-accent bg-clip-text text-transparent select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="w-24 h-1 bg-accent rounded-full mx-auto mb-6"
        />

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="text-gray-500 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button
              variant="primary"
              className="w-60 sm:w-auto flex justify-center"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="secondary"
              className="w-60 sm:w-auto flex justify-center"
            >
              Contact Us
              <MoveRight className="group-hover:translate-x-1 transition duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

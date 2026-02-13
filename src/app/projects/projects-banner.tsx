import * as motion from "motion/react-client";
import projectsBanner from "@/assets/projects-banner.webp";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProjectsBannerSection() {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${projectsBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-cover bg-center h-40 sm:h-60 md:h-100 lg:h-128 w-full relative"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex flex-col justify-center gap-3.5 h-full px-14 max-w-360 mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white z-1"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white z-1 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold flex items-center gap-1.5"
          >
            <Link href={"/"}>Home</Link>
            <span className="flex items-center gap-1.5 text-[#317EFE] hover:text-[#317EFE]/90">
              <ChevronRight size={26} />{" "}
              <Link href={"/projects"}>Projects</Link>
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

import { ChevronRight } from "lucide-react";
import aboutImage from "@/assets/about-banner.jpg";
import Link from "next/link";

export default function AboutBanner() {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${aboutImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-cover bg-center h-40 sm:h-60 md:h-100 lg:h-128 w-full relative"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex flex-col justify-center gap-3.5 h-full px-14 max-w-360 mx-auto">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white z-1">
            About Us
          </h1>
          <p className="text-white z-1 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold flex items-center gap-1.5">
            <Link href={"/"}>Home</Link>
            <span className="flex items-center gap-1.5 text-[#317EFE] hover:text-[#317EFE]/90">
              <ChevronRight size={26} /> <Link href={"/about"}>About Us</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

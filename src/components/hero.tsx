import Image from "next/image";
import heroImg from "@/assets/hero-banner.png";
import { MoveRight } from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="flex items-center bg-linear-to-b from-bgGradient to-[#C3E5FE57]/34 w-full">
      <div className="relative w-full py-20 max-w-360 mx-auto flex justify-end">
        <div className="absolute top-1/2 -translate-y-1/2 px-14 space-y-8 w-2/3 left-0">
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Smart Solutions
            </h3>
            <h1 className="text-5xl pt-4 pb-3 leading-16 font-bold text-dark">
              We're The Best Tech Leading Company In Bangladesh
            </h1>
            <p className="text-base font-medium max-w-xl leading-7">
              We help businesses grow with modern websites, Web3 solutions,
              mobile apps, and result-driven UI/UX design. From idea to launch —
              we build digital products that perform.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href={"contact"}>
              <Button variant={"primary"}>
                Start Your Projects{" "}
                <MoveRight className="group-hover:translate-x-1 transition duration-300" />
              </Button>
            </Link>
            <Link href={"/"}>
              <Button variant="secondary">Learn More</Button>
            </Link>
          </div>
        </div>
        <Image className="w-3/5" src={heroImg} alt="Hero Image" />
      </div>
    </section>
  );
}

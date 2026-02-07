import Image from "next/image";
import heroImg from "@/assets/hero-banner.png";
import { MoveRight } from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="flex items-center bg-linear-to-b from-bgGradient to-[#C3E5FE57]/34 w-full">
      <div className="relative w-full py-12 sm:py-20 max-w-360 mx-auto flex justify-end">
        <div className="text-center sm:text-start sm:absolute top-1/2 left-0 sm:-translate-y-1/2 space-y-8 px-5 md:px-8 lg:px-14 sm:w-5/7 md:w-2/3">
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary">
              Smart Solutions
            </h3>
            <h1 className="pt-1.5 pb-2.5 sm:pt-4 sm:pb-3 text-2xl md:text-4xl lg:text-5xl leading-8 sm:leading-10 md:leading-13 lg:leading-16 font-bold text-dark">
              We're The Best Tech Leading Company In Bangladesh
            </h1>
            <p className="text-sm md:text-base font-medium max-w-xl leading-7">
              We help businesses grow with modern websites, Web3 solutions,
              mobile apps, and result-driven UI/UX design. From idea to launch —
              we build digital products that perform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-6">
            <Link className="w-60 sm:w-auto" href={"contact"}>
              <Button
                className="w-full flex justify-center"
                variant={"primary"}
              >
                Start Your Projects{" "}
                <MoveRight className="group-hover:translate-x-1 transition duration-300" />
              </Button>
            </Link>
            <Link className="w-60 sm:w-auto" href={"/"}>
              <Button
                className="w-full flex justify-center"
                variant="secondary"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <Image
          className="sm:w-3/5 hidden sm:block"
          src={heroImg}
          alt="Hero Image"
        />
      </div>
    </section>
  );
}

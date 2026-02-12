import Image from "next/image";
import heroImg from "@/assets/hero-banner.png";
import { MoveRight } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";
import WaveText from "../../components/ui/text";

export default function Hero() {
  return (
    <motion.section className="flex items-center bg-linear-to-b from-bgGradient to-[#C3E5FE57]/34 w-full">
      <div className="relative w-full py-12 sm:py-10 max-w-360 mx-auto flex justify-end">
        <motion.div className="text-center pb-5 sm:text-start z-1 sm:absolute top-1/2 left-0 sm:-translate-y-1/2 space-y-8 px-5 md:px-8 lg:px-14 sm:w-5/7 md:w-2/3">
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary">
              Smart Solutions
            </h3>
            <WaveText text="We're The Best Tech Leading Company In Bangladesh" />
            <motion.p
              initial={{ y: 40, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="text-sm md:text-base lg:text-lg font-medium max-w-xl leading-7"
            >
              We help businesses grow with modern websites, Web3 solutions,
              mobile apps, and result-driven UI/UX design. From idea to launch —
              we build digital products that perform.
            </motion.p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-6">
            <motion.div
              initial={{ y: 40, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Link className="w-60 sm:w-auto" href={"contact"}>
                <Button
                  className="w-full flex justify-center"
                  variant={"primary"}
                >
                  Start Your Projects{" "}
                  <MoveRight className="group-hover:translate-x-1 transition duration-300" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
            >
              <Link className="w-60 sm:w-auto" href={"/"}>
                <Button
                  className="w-full flex justify-center"
                  variant="secondary"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="sm:w-3/5 hidden sm:block"
        >
          <Image src={heroImg} alt="Hero Image" />
        </motion.div>
      </div>
    </motion.section>
  );
}

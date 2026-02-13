import { MapPin, MoveRight } from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ProjectsCard({
  title,
  img,
  bgColor,
  link,
  description,
  location,
  technologies,
}: {
  title: string;
  link: string;
  description: string;
  location: string;
  img: string;
  bgColor: string;
  technologies: string[];
}) {
  return (
    <motion.div
      initial={{ scale: 0.9, y: 30, opacity: 0.5 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      style={{ backgroundColor: bgColor }}
      className="flex flex-col items-center max-w-162.5 shadow-lg border border-gray-200 gap-7 md:gap-10 rounded-xl"
    >
      <div className="w-full relative h-64 rounded-xl shrink-0 overflow-hidden">
        <Image src={img} fill className="object-cover" alt="Project Image" />
      </div>
      <div className="px-3.5 h-full flex flex-col pb-4 space-y-7">
        <div className="space-y-2 grow">
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-accent">
              {title}
            </h2>
          </div>
          <p className="text-base font-semibold">{description}</p>
          <div className="flex items-center flex-wrap gap-2 mt-5">
            {technologies?.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="border px-2 py-0.5 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
            {technologies?.length > 4 && (
              <span className="border px-2 py-0.5 text-sm rounded-full bg-gray-100 font-medium">
                +{technologies.length - 4}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 sm:gap-0 md:gap-3  items-center justify-between">
          <Link className="w-60 md:w-auto" href={link}>
            <Button variant="rounded" className="w-full">
              View{" "}
              <MoveRight className="group-hover:translate-x-1 transition duration-300" />
            </Button>
          </Link>
          <Button variant="primary">
            <MapPin />
            Client Location From {location}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

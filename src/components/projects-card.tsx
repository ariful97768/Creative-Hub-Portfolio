import { ExternalLink, MapPin } from "lucide-react";
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
      className="flex w-full flex-col items-center max-w-162.5 shadow-lg border border-gray-200 gap-5 md:gap-7 rounded-xl"
    >
      <div className="w-full relative h-40 sm:h-52 md:h-64 rounded-xl  overflow-hidden shrink-0">
        <Image
          src={img}
          fill
          className="object-cover w-full h-full"
          alt="Project Image"
        />
      </div>
      <div className="px-5 w-full h-full flex flex-col pb-6 space-y-7">
        <div className="space-y-2 grow">
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-accent">
              {title}
            </h2>
          </div>
          <div className="flex items-center flex-wrap gap-2 mt-5">
            {technologies?.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-0.5 text-sm rounded-sm"
              >
                {tech}
              </span>
            ))}
            {technologies?.length > 4 && (
              <span className="bg-gray-200 px-2 py-0.5 text-sm rounded-sm">
                +{technologies.length - 4}
              </span>
            )}
          </div>
          <p className="text-base font-semibold">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-3 text-sm sm:text-base ">
          <Link className="text-nowrap" href={link}>
            <button className="flex font-semibold items-center gap-2 px-3 border py-1 max-w-max rounded-md bg-accent text-white">
              Live Demo
              <ExternalLink className="w-4 h-4 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition duration-300" />
            </button>
          </Link>
          <button className="flex font-semibold items-center gap-2 px-3 border py-1 max-w-max rounded-md bg-accent text-white">
            <MapPin className="w-4 h-4 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition duration-300" />
            {location}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

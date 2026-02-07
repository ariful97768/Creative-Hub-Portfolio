import { MapPin, MoveRight } from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function ProjectsCard({
  img,
  bgColor,
  link,
  description,
  location,
}: {
  link: string;
  description: string;
  location: string;
  img: StaticImageData;
  bgColor: string;
}) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col items-center max-w-162.5 shadow-lg border border-gray-200 gap-7 md:gap-10 rounded-xl"
    >
      <div className="w-full relative h-64 rounded-xl shrink-0 overflow-hidden">
        <Image src={img} fill className="object-cover" alt="Project Image" />
      </div>
      <div className="px-3.5 h-full flex flex-col pb-4 space-y-7">
        <div className="space-y-2 grow">
          <div>
            <Link
              className="text-lg md:text-xl lg:text-2xl font-bold text-accent"
              href={link}
            >
              {link}
            </Link>
          </div>
          <p className="text-base font-semibold">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 sm:gap-0 md:gap-3  items-center justify-between">
          <Link className="w-60 md:w-auto" href={link}>
            <Button variant="rounded" className="w-full">
              Click Here{" "}
              <MoveRight className="group-hover:translate-x-1 transition duration-300" />
            </Button>
          </Link >
          <Button variant="primary">
            <MapPin />
            Client Location From {location}
          </Button>
        </div>
      </div>
    </div>
  );
}

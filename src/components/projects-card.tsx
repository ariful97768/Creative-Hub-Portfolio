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
      className="flex flex-col items-center max-w-162.5 gap-10"
    >
      <div className="w-full relative h-64 rounded-b-lg shrink-0 overflow-hidden">
        <Image src={img} fill className="object-cover" alt="Project Image" />
      </div>
      <div className="px-3.5 h-full flex flex-col pb-4 space-y-7">
        <div className="space-y-2 grow">
          <div>
            <Link className="text-2xl font-bold text-accent" href={link}>
              {link}
            </Link>
          </div>
          <p className="text-base font-semibold">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <Link href={link}>
            <Button variant="rounded">
              Click Here{" "}
              <MoveRight className="group-hover:translate-x-1 transition duration-300" />
            </Button>
          </Link>
          <Button variant="primary">
            <MapPin />
            Client Location From {location}
          </Button>
        </div>
      </div>
    </div>
  );
}

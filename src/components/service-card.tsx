import Image, { StaticImageData } from "next/image";
import bgImg from "@/assets/group.png";
import Button from "./ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
export default function ServiceCard({
  icon,
  title,
  text,
  list,
  bgColor,
}: {
  icon: StaticImageData;
  title: string;
  text: string;
  list: string[];
  bgColor: string;
}) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`px-3.5 max-w-106 py-6 text-center rounded-3xl flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center gap-4 max-w-72 mx-auto">
        <div
          style={{
            backgroundImage: `url(${bgImg.src})`,
          }}
          className={`bg-no-repeat bg-contain max-w-max inset-0 bg-center p-8`}
        >
          <Image src={icon} height={70} width={70} alt="Service icon" />
        </div>
        <h3 className="text-3xl font-semibold text-dark text-center">
          {title}
        </h3>
      </div>
      <span className={`mt-4.5 mb-5 px-10 py-0.5 bg-primary`}></span>
      <div className="space-y-3 grow px-10">
        <p className="font-medium">{text}</p>
        <ul className="text-start">
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <Link className="mt-6" href={"/"}>
        <Button variant="rounded">
          Read More <MoveRight />
        </Button>
      </Link>
    </div>
  );
}

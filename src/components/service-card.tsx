import Image, { StaticImageData } from "next/image";
import bgImg from "@/assets/group.png";
import TikMark from "./ui/tik-mark";
export default function ServiceCard({
  icon,
  title,
  description,
  list,
  bgColor,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
  list: string[];
  bgColor: string;
}) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`px-3.5 max-w-106 py-10 text-center rounded-3xl flex flex-col items-center h-full`}
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
        <h3 className="text-2xl md:text-3xl font-semibold text-dark text-center">
          {title}
        </h3>
      </div>
      <span className={`mt-4.5 mb-4 px-10 py-0.5 bg-primary`}></span>
      <div className="space-y-5 grow px-1 sm:px-5 md:px-10">
        <p className="font-medium">{description}</p>
        <ul className="text-start">
          {list.map((item, idx) => (
            <li className="flex items-center gap-1" key={idx}>
              <TikMark /> <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

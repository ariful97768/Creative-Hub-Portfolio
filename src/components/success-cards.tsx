import Image, { StaticImageData } from "next/image";

export default function SuccessCard({
  badge,
  title,
  subtitle,
}: {
  badge: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-max mx-auto space-y-6">
      <div className="bg-dark flex mx-auto items-center justify-center h-30 w-30 xl:w-40 xl:h-40 p-5 rounded-full">
        <div className="relative w-full h-full">
          <Image
            src={badge}
            fill
            className="object-contain"
            alt="Success Image"
          />
        </div>
      </div>
      <div>
        <h2 className="text-center text-xl md:text-2xl xl:leading-14 xl:text-[32px] font-semibold">
          {title} <br />
          {subtitle}
        </h2>
      </div>
    </div>
  );
}

"use client";
import Image, { StaticImageData } from "next/image";
import CountUp from "react-countup";
export default function SuccessCard({
  badge,
  title,
  number,
}: {
  badge: StaticImageData;
  title: string;
  number: number;
}) {
  return (
    <div className="max-w-max mx-auto space-y-6">
      <div className="bg-dark flex mx-auto items-center justify-center h-30 w-30 xl:w-40 xl:h-40 p-7 md:p-10 rounded-full">
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
          <span className="whitespace-nowrap">{title}</span> <br />
          <CountUp duration={5} end={number} enableScrollSpy scrollSpyOnce />+
        </h2>
      </div>
    </div>
  );
}

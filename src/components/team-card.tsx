import Image from "next/image";

export default function TeamCard({
  image,
  name,
  about,
}: {
  image: string;
  name: string;
  about: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 flex shrink-0 flex-col text-start w-full h-full shadow-lg max-w-50 lg:max-w-106">
      <div className="relative shrink-0 w-50 h-40 lg:w-106 lg:h-75 ">
        <Image
          fill
          src={image}
          alt={name}
          className="w-full rounded-t-xl h-full object-cover"
        />
      </div>
      <div className="max-w-50 grow lg:max-w-79 w-full pt-4 px-4.5 pb-5">
        <h3 className="mb-1 text-base  md:text-[20px] font-semibold">{name}</h3>
        <p className="text-sm md:text-base font-medium">{about}</p>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
}

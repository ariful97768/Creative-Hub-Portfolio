import Image, { StaticImageData } from "next/image";

export default function TeamCard({
  image,
  name,
  designation,
}: {
  image: StaticImageData;
  name: string;
  designation: string;
}) {
  return (
    <div className="rounded-xl text-start w-full shadow-lg max-w-106">
      <div className="relative w-106 h-75 ">
        <Image
          fill
          src={image}
          alt={name}
          className="w-full rounded-t-xl h-full object-cover"
        />
      </div>
      <div className="max-w-79 w-full pt-4 px-4.5 pb-5">
        <h3 className="mb-1 text-[20px] font-semibold">{name}</h3>
        <p className="text-base font-medium">{designation}</p>
      </div>
    </div>
  );
}

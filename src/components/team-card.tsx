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
    <div className="rounded-xl border border-gray-200 flex shrink-0 flex-col text-start w-full h-full shadow-lg">
      <div className="relative shrink-0 aspect-4/3 w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="grow w-full pt-4 px-4.5 pb-5">
        <h3 className="mb-1 text-base md:text-[20px] font-semibold">{name}</h3>
        <p className="text-sm md:text-base font-medium">{about}</p>
      </div>
    </div>
  );
}

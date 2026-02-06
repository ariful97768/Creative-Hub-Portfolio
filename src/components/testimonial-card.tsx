import Image, { StaticImageData } from "next/image";

export default function TestimonialCard({
  review,
  image,
  role,
  country,
  company,
}: {
  review: string;
  image: StaticImageData;
  role: string;
  country: string;
  company: string;
}) {
  return (
    <div className="max-w-106.5 border rounded-xl border-gray-200 p-5 shadow-lg bg-white text-[20px] font-semibold">
      <p>"{review}"</p>
      <div className="flex gap-6.5 pt-4.5">
        <div className="flex flex-col items-center">
          <div className="relative mb-1.5 w-32.5 h-19.5 shadow-lg">
            <Image
              fill
              src={image}
              className="object-cover rounded-xl"
              alt="Client 1"
            />
          </div>
          <span>{country}</span>
        </div>
        <div className="pt-3">
          <h4>{company}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { MapPin, Quote, Star } from "lucide-react";

export default function TestimonialCard({
  review,
  image,
  role,
  country,
  company,
  name,
  rating = 5,
}: {
  review: string;
  image: string;
  role: string;
  country: string;
  company: string;
  name: string;
  rating?: number;
}) {
  return (
    <div className="max-w-sm w-full border rounded-2xl border-gray-100 p-6 shadow-md bg-white flex flex-col justify-between gap-5">
      {/* Quote Icon */}
      <div>
        <Quote className="rotate-180 w-10 h-10 text-accent/40 fill-accent/15 mb-4" />
        <p className="text-dark text-sm md:text-base leading-relaxed font-medium">
          &ldquo;{review}&rdquo;
        </p>
      </div>

      {/* Bottom Section: Profile + Rating + Country */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          <div className="relative w-12 h-12 shrink-0">
            <Image
              fill
              src={image}
              className="object-cover rounded-full"
              alt={company}
            />
          </div>
          {/* Name & Role */}
          <div>
            <h4 className="text-sm md:text-base font-bold text-dark">
               {  name } 
            </h4>
            <p className="text-xs md:text-sm text-gray-500">{role}</p>
          </div>
        </div>

        {/* Rating & Country */}
        <div className="flex flex-col items-end gap-1">
          {/* Star Rating */}
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300 fill-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Country */}
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="w-3 h-3 text-accent" />
            <span>{country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

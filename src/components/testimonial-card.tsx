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
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="text-5xl text-primary opacity-20 mb-4">
        <Quote className="rotate-180 w-10 md:w-14 h-10 md:h-14 text-accent/60 fill-accent/25 mb-4" />
      </div>
      {/* Testimonial Text */}
      <p className="text-gray-700 text-lg italic mb-6 md:mb-8 leading-relaxed line-clamp-4 grow">
        "{review}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        {/* Client Image */}
        <div className="shrink-0">
          <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            {/* "testimonial.image"  */}
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          {/* Star Rating */}
          <div className="flex mt-3 gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300 fill-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Details */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
              <p className="text-gray-600 text-sm">
                {role}, {company}
              </p>
            </div>
          </div>
          {true && (
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{country}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

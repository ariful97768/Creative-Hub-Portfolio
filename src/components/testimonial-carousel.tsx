"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialCard from "@/components/testimonial-card";

type TestimonialData = {
  id: string;
  name: string;
  review: string;
  image: string;
  position: string;
  country: string;
  company: string;
  rating: number;
};

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: TestimonialData[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      {/* Navigation Arrows */}
      <div className="flex justify-end items-center mb-4">
        <div className="flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <MoveLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <MoveRight size={18} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="py-3 h-auto!">
            <TestimonialCard
              name={testimonial.name}
              rating={testimonial.rating}
              review={testimonial.review}
              image={testimonial.image}
              role={testimonial.position}
              country={testimonial.country}
              company={testimonial.company}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

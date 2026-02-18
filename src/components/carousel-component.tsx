"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { MoveLeft, MoveRight } from "lucide-react";
import TeamCard from "@/components/team-card";

export default function CarouselComponent({
  teamMembers,
}: {
  teamMembers: {
    image: string;
    name: string;
    about: string;
  }[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="flex justify-end items-start mt-2 mb-3">
        <div className="flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <MoveLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <MoveRight size={20} />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.33}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="py-5">
            <TeamCard
              image={member.image}
              name={member.name}
              about={member.about}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

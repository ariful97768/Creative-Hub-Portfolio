"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  // Left Right controller
  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <div className="flex justify-end items-start mt-2 mb-3">
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <MoveLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <MoveRight size={20} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="shrink-0 py-5">
              <TeamCard
                image={member.image}
                name={member.name}
                about={member.about}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

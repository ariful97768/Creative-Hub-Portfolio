"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import teamMember1 from "@/assets/team-1.jpg";
import teamMember2 from "@/assets/team-2.png";
import SectionTitle from "@/components/ui/section-title";
import { MoveLeft, MoveRight } from "lucide-react";
import TeamCard from "@/components/team-card";

// Team Section with Embla Carousel
export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const teamMembers = [
    {
      image: teamMember1,
      name: "MD Shakil Mirza",
      designation:
        "Full Stack Web Developer Cyber Security Expert & Designer and (CEO) creative hub it agency",
    },
    {
      image: teamMember2,
      name: "Esrak Fahim",
      designation:
        "Full Stack Frontend Web Developer Expert & Designer creative hub it agency",
    },
    {
      image: teamMember2,
      name: "MH Shakib",
      designation:
        "Full Stack Blockchain Web Developer Expert & Designer and creative hub it agency",
    },
    {
      image: teamMember2,
      name: "MH Shakib",
      designation:
        "Full Stack Blockchain Web Developer Expert & Designer and creative hub it agency",
    },
  ];

  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="pb-20">
      {/* Header with title and navigation buttons */}
      <SectionTitle
        align="center"
        subheading="Our Team Member"
        heading="Meet Our Experience Professional IT Employee"
      />
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

      {/* Carousel using Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="shrink-0 py-5">
              <TeamCard
                image={member.image}
                name={member.name}
                designation={member.designation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

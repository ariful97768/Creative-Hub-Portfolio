import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import teamMember1 from "@/assets/team-1.jpg";
import teamMember2 from "@/assets/team-2.png";
import SectionTitle from "./ui/section-title";
import { MoveLeft, MoveRight } from "lucide-react";
import TeamCard from "./team-card";

// Team Section with react-responsive-carousel
export default function TeamSection() {
  const carouselRef = useRef<typeof Carousel | null>(null);

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

  const handlePrev = () => {
    if (carouselRef.current) {
      (carouselRef.current as any).decrement();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      (carouselRef.current as any).increment();
    }
  };

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

      {/* Carousel using react-responsive-carousel */}
      <Carousel
        ref={carouselRef as any}
        centerMode
        centerSlidePercentage={33.33}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="px-3 py-5">
            <TeamCard
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

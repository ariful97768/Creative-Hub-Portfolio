"use client";
import ServiceCard from "@/components/service-card";
import SectionTitle from "@/components/ui/section-title";
import icon1 from "@/assets/icon-1.png";
import icon2 from "@/assets/icon-2.png";
import icon3 from "@/assets/icon-3.png";
import icon4 from "@/assets/icon-4.png";
import icon5 from "@/assets/icon-5.png";
import icon6 from "@/assets/icon-6.png";
import { useMotionValue, useSpring, motion } from "motion/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/ui/custom-cursor";

export default function Services() {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw mouse positions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring-based cursor position
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const serviceData = [
    {
      bgColor: "#FFF3F3",
      icon: icon1,
      title: "Website Development",
      description:
        "Custom, responsive, and high-performance websites using the latest technologies",
      list: [
        "Business websites",
        "E-commerce solutions",
        "Custom web applications",
      ],
    },
    {
      bgColor: "#E8FBFF",
      icon: icon2,
      title: "Blockchain & Web3 Development",
      description: "Next-generation decentralized solutions for the future.",
      list: [
        "Web3 platforms",
        "Smart contract development",
        "DApps & blockchain integration",
      ],
    },
    {
      bgColor: "#F9F8DA",
      icon: icon3,
      title: "Mobile App Development",
      description:
        "Feature-rich, scalable mobile applications for Android & iOS.",
      list: [
        "Native & cross-platform apps",
        "Secure backend integration",
        "User-friendly interfaces",
      ],
    },
    {
      bgColor: "#F9F8DA",
      icon: icon4,
      title: "UI/UX Design",
      description:
        "Creating intuitive, engaging, and user-focused digital experiences.",
      list: [
        "User research & analysis",
        "Wire framing & prototyping",
        "Modern, responsive UI design",
        "Conversion-focused UX strategy",
      ],
    },
    {
      bgColor: "#FFF3F3",
      icon: icon5,
      title: "SEO Optimization",
      description:
        "Rank higher, get traffic, and grow your business organically.",
      list: [
        "On-page & technical SEO",
        "Speed & performance optimization",
        "Long-term ranking strategy",
      ],
    },
    {
      bgColor: "#E8FBFF",
      icon: icon6,
      title: "Cyber Security",
      description:
        "Protecting your digital assets with advanced security solutions.",
      list: [
        "Website & application security",
        "Data protection & privacy",
        "Vulnerability assessment & penetration testing",
        "Threat monitoring & risk prevention",
      ],
    },
  ];
  return (
    <section id="services" className="pb-20 px-5 md:px-8 lg:px-14 pt-17">
      <SectionTitle
        align="center"
        heading="Explore Our Best Premium Quality Service"
        subheading="Latest Service"
      />
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="mt-14 relative"
      >
        {/* Custom Cursor */}
        <CustomCursor
          cursorX={cursorX}
          cursorY={cursorY}
          isHovering={isHovering}
        />

        {/* Service Cards */}
        <div className="max-w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10 lg:gap-y-15">
          {serviceData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true,  }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: idx * 0.15,
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => router.push("/contact")}
              style={{ cursor: "default" }}
            >
              <ServiceCard
                bgColor={service.bgColor}
                icon={service.icon}
                title={service.title}
                description={service.description}
                list={service.list}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

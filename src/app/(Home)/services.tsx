import ServiceCard from "@/components/service-card";
import SectionTitle from "@/components/ui/section-title";
import icon1 from "@/assets/icon-1.png";
import icon2 from "@/assets/icon-2.png";
import icon3 from "@/assets/icon-3.png";
import icon4 from "@/assets/icon-4.png";
import icon5 from "@/assets/icon-5.png";
import icon6 from "@/assets/icon-6.png";
export default function Services() {
  return (
    <section className="pb-20 px-5 md:px-8 lg:px-14 pt-17">
      <SectionTitle
        align="center"
        heading="Explore Our Best Premium Quality Service"
        subheading="Latest Service"
      />
      <div className="mt-14">
        {/* Service Card */}
        <div className="max-w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-15">
          <ServiceCard
            bgColor="#FFF3F3"
            icon={icon1}
            title="Website Development"
            text="Custom, responsive, and high-performance websites using the latest
          technologies."
            list={[
              "Business websites",
              "E-commerce solutions",
              "Custom web applications",
            ]}
          />
          <ServiceCard
            bgColor="#E8FBFF"
            icon={icon2}
            title="Blockchain & Web3 Development"
            text="Next-generation decentralized solutions for the future."
            list={[
              "Web3 platforms",
              "Smart contract development",
              "DApps & blockchain integration",
            ]}
          />
          <ServiceCard
            bgColor="#F9F8DA"
            icon={icon3}
            title="Mobile App Development"
            text="Feature-rich, scalable mobile applications for Android & iOS."
            list={[
              "Native & cross-platform apps",
              "Secure backend integration",
              "User-friendly interfaces",
            ]}
          />
          <ServiceCard
            bgColor="#F9F8DA"
            icon={icon4}
            title="UI/UX Design"
            text="Creating intuitive, engaging, and user-focused digital experiences."
            list={[
              "User research & analysis",
              "Wire framing & prototyping",
              "Modern, responsive UI design",
              "Conversion-focused UX strategy",
            ]}
          />
          <ServiceCard
            bgColor="#FFF3F3"
            icon={icon5}
            title="SEO Optimization"
            text="Rank higher, get traffic, and grow your business organically."
            list={[
              "On-page & technical SEO",
              "Speed & performance optimization",
              "Long-term ranking strategy",
            ]}
          />
          <ServiceCard
            bgColor="#E8FBFF"
            icon={icon6}
            title="Cyber Security"
            text="Protecting your digital assets with advanced security solutions."
            list={[
              "Website & application security",
              "Data protection & privacy",
              "Vulnerability assessment & penetration testing",
              "Threat monitoring & risk prevention",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

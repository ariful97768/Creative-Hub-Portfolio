"use client";
import dynamic from "next/dynamic";
import ContactUsFormSection from "@/components/contact-section";
import Banner from "@/components/banner";
import contactImg from "@/assets/istockphoto-914973162-612x612.jpg";
import SectionTitle from "@/components/ui/section-title";

// Dynamic import with SSR disabled - Leaflet requires window object
const MapSection = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <div className="h-72 md:h-137 bg-gray-200 animate-pulse" />,
});

export default function ContactUsPage() {
  return (
    <main>
      <Banner
        title="Contact Us"
        link="Home"
        subLink="Contact"
        image={contactImg.src}
      />
      <div className="mt-16 md:mt-20 mb-8 md:mb-14 max-w-360 mx-auto px-5 md:px-8 lg:px-14">
        <SectionTitle
          subheading="Get In Touch"
          heading="We’d love to hear from you"
        />
      </div>
        <ContactUsFormSection />
      {/* Map Section */}
      <section className="max-w-384 mx-auto">
        {/* If you're developing this section then comment the MapSection component otherwise it will throw an error every time page auto reloads. Don't know why, Didn't bothered. Figure it out yourself. */}
        {/* Runtime Error: Map container is being reused by another instance */}
        <MapSection />
      </section>
    </main>
  );
}

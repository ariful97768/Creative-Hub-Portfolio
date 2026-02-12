"use client";
import dynamic from "next/dynamic";
import ContactBanner from "./contact-banner";
import ContactUsFormSection from "@/components/contact-section";

// Dynamic import with SSR disabled - Leaflet requires window object
const MapSection = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <div className="h-72 md:h-137 bg-gray-200 animate-pulse" />,
});

export default function ContactUsPage() {
  return (
    <main>
      <ContactBanner />
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

import Testimonials from "@/components/testimonials";
import AboutBanner from "./banner";
import AboutUsSection from "./about-section";
import SuccessSection from "./success";
import TeamSection from "./teams-section";

export default function AboutUsPage() {
  return (
    <main>
      {/* Banner section */}
      <AboutBanner />
      <div className="max-w-360 px-5 md:px-8 lg:px-14 mx-auto">
        {/* About us section. Make sure you import it from: "./about-section" */}
        <AboutUsSection />
        <TeamSection />
        <SuccessSection />
        <Testimonials />
      </div>
    </main>
  );
}

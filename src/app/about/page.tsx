export const dynamic = "force-dynamic";

import Testimonials from "@/components/testimonials";
import AboutUsSection from "./about-section";
import SuccessSection from "./success";
import TeamSection from "./teams-section";
import Banner from "@/components/banner";
import aboutImage from "@/assets/about-banner.jpg";

export default function AboutUsPage() {
  return (
    <main>
      {/* Banner section */}
      <Banner
        title="About Us"
        link="Home"
        subLink="About"
        image={aboutImage.src}
      />
      <div className="max-w-360 mx-auto">
        <AboutUsSection />
      </div>
      <div className="max-w-360 px-5 md:px-8 lg:px-14 mx-auto">
        {/* About us section. Make sure you import it from: "./about-section" */}
        <TeamSection />
        <SuccessSection />
      </div>
      {/* removed from the div because it already contains the section classes */}
      <Testimonials />
    </main>
  );
}

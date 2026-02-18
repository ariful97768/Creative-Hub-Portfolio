import aboutImage from "@/assets/service-banner.jpg";
import Banner from "@/components/banner";
import Services from "../(Home)/services";
import SectionTitle from "@/components/ui/section-title";
import ContactUsFormSection from "@/components/contact-section";

export default function ServicesBanner() {
  return (
    <main>
      <Banner
        title="Our Services"
        link="Home"
        subLink="Services"
        image={aboutImage.src}
      />
      <Services />
      <div className="mb-8 md:mb-14 max-w-360 mx-auto px-5 md:px-8 lg:px-14">
        <SectionTitle
          subheading="Let's Collaborate"
          heading="Have a Vision? We'll Bring It to Life"
        />
      </div>
      <ContactUsFormSection />
    </main>
  );
}

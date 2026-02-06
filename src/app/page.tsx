import Hero from "@/components/hero";
import Services from "@/components/services";
import AboutUsSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUsSection />
      <ProjectsSection />
      <Testimonials />
    </main>
  );
}

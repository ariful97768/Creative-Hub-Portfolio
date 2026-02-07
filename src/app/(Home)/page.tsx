import Hero from "@/app/(Home)/hero";
import Services from "@/app/(Home)/services";
import AboutUsSection from "@/app/(Home)/about-section";
import ProjectsSection from "@/app/(Home)/projects-section";
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

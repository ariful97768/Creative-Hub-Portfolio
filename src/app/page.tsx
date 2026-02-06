import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import AboutUsSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUsSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

import SectionTitle from "@/components/ui/section-title";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import ProjectsCard from "./projects-card";
import Button from "./ui/button";
import { MoveRight } from "lucide-react";
export default function ProjectsSection() {
  return (
    <section className="px-14 pt-20 pb-19">
      <SectionTitle
        align="center"
        subheading="LATEST LIVE PROJECT"
        heading="Latest completed tech Portfolio showcase"
      />
      <div className="max-w-max mx-auto mt-6 gap-6 justify-center">
        <div className="flex justify-end mb-7">
          <Button variant="action">
            See All{" "}
            <MoveRight className="group-hover:translate-x-1 transition duration-300" />
          </Button>
        </div>
        <div className="flex gap-6 justify-center">
          <ProjectsCard
            link="https://tenstagematrix.com/"
            description="A decentralized, blockchain-integrated platform empowering community-driven donations, ensuring security, and efficient resource distribution for sustainable impact."
            location="China"
            img={project1}
            bgColor="#FFF3F3"
          />

          <ProjectsCard
            link="https://worldmerket.com/"
            description="Trade Binary Options with Confidence Join thousands of traders on our advanced platform. Start with as little as $1 and earn up to 95% profit on successful trades."
            location="Canada"
            img={project2}
            bgColor="#E8FBFF"
          />
        </div>
      </div>
    </section>
  );
}

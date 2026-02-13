import ProjectsCard from "@/components/projects-card";
import SectionTitle from "@/components/ui/section-title";
import { getAllProjects } from "@/lib/actions/projects-control";
import ProjectsBannerSection from "./projects-banner";

export default async function Projects() {
  const projects = await getAllProjects();

  if (!projects.success) {
    throw new Error(projects.error);
  }

  return (
    <main>
      <ProjectsBannerSection />
      <section className="pt-20">
        <SectionTitle
          subheading="Our Best Projects"
          heading="We have completed many projects for our clients"
        />
        <div className="grid grid-cols-2 py-20 max-w-7xl mx-auto gap-10">
          {projects.data.map((project, index) => (
            <ProjectsCard
              technologies={project.technologies}
              title={project.title}
              key={project._id.toString()}
              bgColor={index % 2 === 0 ? "#FFF3F3" : "#E8FBFF"}
              description={project.description}
              img={project.image}
              link={project.link}
              location={project.clientCountry}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

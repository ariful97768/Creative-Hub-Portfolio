import ProjectsCard from "@/components/projects-card";
import SectionTitle from "@/components/ui/section-title";
import { getAllProjects } from "@/lib/actions/projects-control";
// import ProjectsBannerSection from "./projects-banner";
import projectsBanner from "@/assets/projects-banner.jpg";
import Banner from "@/components/banner";

export default async function Projects() {
  const projects = await getAllProjects();

  if (!projects.success) {
    throw new Error(projects.error);
  }

  return (
    <main>
      <Banner
        title="Client Projects"
        link="Home"
        subLink="Projects"
        image={projectsBanner.src}
      />
      <section className="max-w-360 mx-auto px-5 md:px-8 lg:px-14 py-20">
        <SectionTitle
          subheading="Our Best Projects"
          heading="We have completed many projects for our clients"
        />
        <div className="max-w-max mx-auto mt-6 gap-6 justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-10 justify-center">
            {projects.data.map((project, index) => (
              <ProjectsCard
                key={project._id.toString()}
                title={project.title}
                technologies={project.technologies}
                link={project.link}
                description={project.description}
                location={project.clientCountry}
                img={project.image}
                bgColor={index % 2 === 0 ? "#FFF3F3" : "#E8FBFF"}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

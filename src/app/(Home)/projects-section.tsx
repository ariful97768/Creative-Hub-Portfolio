import SectionTitle from "@/components/ui/section-title";
import ProjectsCard from "@/components/projects-card";
import Button from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import getDb from "@/lib/db";
export default async function ProjectsSection() {
  const db = await getDb();
  const projects = await db.projects
    .find()
    .limit(2)
    .sort({ createdAt: -1 })
    .toArray();
  return (
    <section className="px-5 md:px-8 lg:px-14 pt-20 pb-19">
      <SectionTitle
        align="center"
        subheading="LATEST LIVE PROJECT"
        heading="Latest completed tech Portfolio showcase"
      />
      <div className="w-full mx-auto mt-6 gap-6 justify-center">
        <div className="flex justify-end mb-7">
          <Link href={"/projects"}>
            <Button variant="action" className="text-base">
              See All{" "}
              <MoveRight className="group-hover:translate-x-1 transition duration-300" />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row sm:max-w-max md:max-w-full mx-auto align-normal gap-6 justify-center">
          {projects.map((project, index) => (
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
  );
}

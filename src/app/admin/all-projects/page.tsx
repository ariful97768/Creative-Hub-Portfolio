import ProjectsCard from "@/components/projects-card";
import { getAllProjects } from "@/lib/actions/projects-control";
import { Pen } from "lucide-react";
import DeleteProjects from "./delete-projects";

export default async function AllProjectsPage() {
  const projects = await getAllProjects();

  if (!projects.success) {
    throw new Error(projects.error);
  }
  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">All Projects</h1>
        <p className="text-gray-500">Manage all projects</p>
      </div>
      <div className="flex justify-end my-10 px-10">
        <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer">
          Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        {projects.data.map((project, index) => (
          <div className="relative group" key={project._id.toString()}>
            <div className="z-10 gap-2 group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 flex absolute right-5 top-5">
              <button className="p-2 hover:bg-gray-600 transition-all duration-300 cursor-pointer rounded-full bg-gray-500">
                <Pen className="text-white" size={18} />
              </button>
              <DeleteProjects id={project._id.toString()} />
            </div>
            <ProjectsCard
              bgColor={index % 2 === 0 ? "#FFF3F3" : "#E8FBFF"}
              technologies={project.technologies}
              title={project.title}
              description={project.description}
              img={project.image}
              link={project.link}
              location={project.clientCountry}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

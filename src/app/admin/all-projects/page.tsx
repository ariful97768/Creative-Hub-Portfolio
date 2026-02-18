import { getAllProjects } from "@/lib/actions/projects-control";
import AddProjectModal from "./add-project-modal";
import ProjectItem from "./project-item";

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
        <AddProjectModal />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 px-5 md:px-10">
        {projects.data.map((project) => (
          <ProjectItem
            key={project._id.toString()}
            project={{ ...project, _id: project._id.toString() }}
          />
        ))}
      </div>
    </section>
  );
}

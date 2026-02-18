"use client";
import { Pen } from "lucide-react";
import { useState } from "react";
import { Project } from "@/lib/type";
import DeleteProjects from "./delete-projects";
import ProjectsCard from "@/components/projects-card";
import UpdateProjectModal from "./update-project-modal";

export default function ProjectItem({
  project,
}: {
  project: Project & { _id: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <div className="z-10 gap-2 group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 flex absolute right-3 top-3">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-600 transition-all duration-300 cursor-pointer rounded-full bg-gray-500"
        >
          <Pen className="text-white" size={18} />
        </button>

        {/* Delete Functionality */}
        <DeleteProjects id={project._id.toString()} />
      </div>

      {/* Projects Card */}
      <ProjectsCard
        title={project.title}
        link={project.link}
        description={project.description}
        location={project.clientCountry}
        img={project.image}
        bgColor={"#E8FBFF"}
        technologies={project.technologies}
      />

      {/* Update modal */}
      {isOpen && (
        <UpdateProjectModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={project}
        />
      )}
    </div>
  );
}

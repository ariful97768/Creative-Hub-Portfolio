"use client";
import { Pen } from "lucide-react";
import { useState } from "react";
import { Team } from "@/lib/type";
import DeleteTeam from "./delete-team";
import TeamCard from "@/components/team-card";
import UpdateTeamModal from "./update-team-modal";

export default function TeamItem({
  team,
}: {
  team: Team & { _id: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <div className="z-10 gap-2 visible sm:group-hover:visible opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex absolute right-3 top-3">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-600 transition-all duration-300 cursor-pointer rounded-full bg-gray-500"
        >
          <Pen className="text-white" size={18} />
        </button>
        <DeleteTeam id={team._id.toString()} />
      </div>
      <TeamCard name={team.name} image={team.image} about={team.about} />

      {/* Update modal */}
      {isOpen && (
        <UpdateTeamModal isOpen={isOpen} setIsOpen={setIsOpen} data={team} />
      )}
    </div>
  );
}

import TeamCard from "@/components/team-card";
import { getAllTeams } from "@/lib/actions/teams-control";
import { Pen, Trash } from "lucide-react";
import DeleteTeam from "./delete-team";

export default async function AllTeamsPage() {
  const result = await getAllTeams();

  if (!result.success) throw new Error(result.error);

  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">All Teams</h1>
        <p className="text-gray-500">Manage all teams</p>
      </div>
      <div className="flex justify-end my-10 px-10">
        <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer">
          Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-max mx-auto gap-10 px-10">
        {result.data.map((team) => (
          <div className="relative max-w-max group" key={team._id.toString()}>
            <div className="z-10 gap-2 group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 flex absolute right-5 top-5">
              <button className="p-2 hover:bg-gray-600 transition-all duration-300 cursor-pointer rounded-full bg-gray-500">
                <Pen className="text-white" size={18} />
              </button>
              <DeleteTeam id={team._id.toString()} />
            </div>
            <TeamCard
              key={team._id.toString()}
              image={team.image}
              name={team.name}
              about={team.about}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

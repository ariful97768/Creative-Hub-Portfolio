export const dynamic = "force-dynamic";

import { getAllTeams } from "@/lib/actions/teams-control";
import AddTeamModal from "./add-team-modal";
import TeamItem from "./team-item";

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
        <AddTeamModal />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        {result.data.map((team) => (
          <TeamItem
            key={team._id.toString()}
            team={{ ...team, _id: team._id.toString() }}
          />
        ))}
      </div>
    </section>
  );
}

import CarouselComponent from "@/components/carousel-component";
import SectionTitle from "@/components/ui/section-title";
import getDb from "@/lib/db";

// Team Section with Embla Carousel
export default async function TeamSection() {
  const db = await getDb();
  const teamMembers = await db.teams
    .find()
    .limit(10)
    .sort({ createdAt: -1 })
    .toArray();

  const team = teamMembers.map((teamMember) => ({
    image: teamMember.image,
    name: teamMember.name,
    about: teamMember.about,
  }));
  return (
    <section id="team" className="pt-12 pb-20">
      {/* Header with title and navigation buttons */}
      <SectionTitle
        align="center"
        subheading="Our Team Member"
        heading="Meet Our Experience Professional IT Employee"
      />

      {/* Carousel using Embla */}
      <CarouselComponent teamMembers={team} />
    </section>
  );
}

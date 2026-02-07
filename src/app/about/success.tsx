import SuccessCard from "@/components/success-cards";
import badge from "@/assets/icon-badge.png";
import clients from "@/assets/icon-clients.png";
import happyClient from "@/assets/icon-happy-client.png";
import handStar from "@/assets/icon-hand-star.png";

export default function SuccessSection() {
  return (
    <section className="mb-25">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-max mx-auto p-8 md:py-13 md:px-20 gap-10 lg:gap-21 bg-light-blue rounded-xl">
        <SuccessCard badge={badge} title="Winning award" subtitle="30+" />
        <SuccessCard badge={happyClient} title="Happy Client" subtitle="180+" />
        <SuccessCard
          badge={handStar}
          title="Complete project"
          subtitle="300+"
        />
        <SuccessCard badge={clients} title="Client review" subtitle="484+" />
      </div>
    </section>
  );
}

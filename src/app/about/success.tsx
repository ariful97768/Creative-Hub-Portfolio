import SuccessCard from "@/components/success-cards";
import badge from "@/assets/icon-badge.png";
import clients from "@/assets/icon-clients.png";
import happyClient from "@/assets/icon-happy-client.png";
import handStar from "@/assets/icon-hand-star.png";

export default function SuccessSection() {
  return (
    <section className="mb-25 bg-light-blue">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-max mx-auto p-8 md:py-13 md:px-20 gap-10 lg:gap-21 rounded-xl">
        <SuccessCard badge={badge} title="Winning award" number={30} />
        <SuccessCard badge={happyClient} title="Happy Client" number={180} />
        <SuccessCard
          badge={handStar}
          title="Complete project"
          number={300}
        />
        <SuccessCard badge={clients} title="Client review" number={484} />
      </div>
    </section>
  );
}

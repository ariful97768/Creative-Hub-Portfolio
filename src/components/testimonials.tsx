import SectionTitle from "@/components/ui/section-title";
import TestimonialCarousel from "@/components/testimonial-carousel";
import getDb from "@/lib/db"; 

export default async function Testimonials() {
  const db = await getDb();
  const testimonials = await db.testimonials
    .find()
    .limit(6)
    .sort({ createdAt: -1 })
    .toArray();

  // Serialize for client component (ObjectId → string)
  const serialized = testimonials.map((t) => ({
    id: t._id.toString(),
    name: t.name,
    review: t.review,
    image: t.image,
    position: t.position,
    country: t.country,
    company: t.company,
    rating: t.rating,
  }));

  return (
    <section className="space-y-10 max-w-360 mx-auto pb-16 md:pb-20 px-5 md:px-8 lg:px-14">
      <div className="max-w-120">
        <SectionTitle
          align="left"
          heading="Our Client's Review About Us"
          subheading="Testimonial"
        />
      </div>
      <TestimonialCarousel testimonials={serialized} />
    </section>
  );
}

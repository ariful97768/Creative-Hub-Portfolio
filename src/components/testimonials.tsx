import SectionTitle from "@/components/ui/section-title";
import TestimonialCard from "@/components/testimonial-card";
import getDb from "@/lib/db";
export default async function Testimonials() {
  const db = await getDb();
  const testimonials = await db.testimonials
    .find()
    .limit(3)
    .sort({ createdAt: -1 })
    .toArray();
  return (
    <section className="space-y-12.5 max-w-360 mx-auto pb-20 px-5 md:px-8 lg:px-14">
      <div className="max-w-120">
        <SectionTitle
          align="left"
          heading="Our Client's Review About Us"
          subheading="Testimonial"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-6 max-w-max mx-auto">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id.toString()}
            review={testimonial.review}
            image={testimonial.image}
            role={testimonial.position}
            country={testimonial.country}
            company={testimonial.company}
          />
        ))}
      </div>
    </section>
  );
}

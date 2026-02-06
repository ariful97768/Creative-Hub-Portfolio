import SectionTitle from "./ui/section-title";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import TestimonialCard from "./testimonial-card";
export default function Testimonials() {
  return (
    <section className="space-y-12.5 max-w-360 mx-auto pb-20 px-14">
      <div className="max-w-120">
        <SectionTitle
          align="left"
          heading="Our Client's Review About Us"
          subheading="Testimonial"
        />
      </div>
      <div className="flex gap-6 max-w-max mx-auto">
        <TestimonialCard review="CreativeHubIT transformed our ideas into a modern digital platform. Their timely delivery and professional approach exceeded our expectations." image={client1 }  role="CEO" country="China" company="Li Wei, Shanghai"/>
        <TestimonialCard review="CreativeHubIT transformed our ideas into a modern digital platform. Their timely delivery and professional approach exceeded our expectations." image={client2 }  role="CEO" country="China" company="Li Wei, Shanghai"/>
        <TestimonialCard review="CreativeHubIT transformed our ideas into a modern digital platform. Their timely delivery and professional approach exceeded our expectations." image={client3 }  role="CEO" country="China" company="Li Wei, Shanghai"/>
      </div>
    </section>
  );
}

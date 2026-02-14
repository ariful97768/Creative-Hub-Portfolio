import TestimonialCard from "@/components/testimonial-card";
import { getAllReviews } from "@/lib/actions/review-control";
import { Pen, Trash } from "lucide-react";
import DeleteReview from "./delete-review";

export default async function AllReviewsPage() {
  const reviews = await getAllReviews();
  if (!reviews.success) {
    throw new Error(reviews.error);
  }
  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">All Reviews</h1>
        <p className="text-gray-500">Manage all reviews</p>
      </div>
      <div className="flex justify-end my-10 px-10">
        <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer">
          Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {reviews.data.map((review) => (
          <div className="relative group" key={review._id.toString()}>
            <div className="z-10 gap-2 group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 flex absolute right-3 top-3">
              <button className="p-2 hover:bg-gray-600 transition-all duration-300 cursor-pointer rounded-full bg-gray-500">
                <Pen className="text-white" size={18} />
              </button>
              <DeleteReview id={review._id.toString()} />
            </div>
            <TestimonialCard
              name={review.name}
              review={review.review}
              image={review.image}
              role={review.position}
              country={review.country}
              company={review.company}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

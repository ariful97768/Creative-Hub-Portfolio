"use client";
import { Pen } from "lucide-react";
import { useState } from "react";
import DeleteReview from "./delete-review";
import UpdateReviewModal from "./update-reviewModal";
import TestimonialCard from "@/components/testimonial-card";
import { Testimonial } from "@/lib/type";

export default function ReviewItem({
  review,
}: {
  review: Testimonial & { _id: string };
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
        <DeleteReview id={review._id.toString()} />
      </div>
      <TestimonialCard
        name={review.name}
        review={review.review}
        image={review.image}
        role={review.position}
        country={review.country}
        company={review.company}
        rating={review.rating}
      />

      {/* Update modal */}
      {isOpen && (
        <UpdateReviewModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={review}
        />
      )}
    </div>
  );
}

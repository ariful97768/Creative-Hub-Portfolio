import { getAllReviews } from "@/lib/actions/review-control";
import AddReviewModal from "./add-review-modal";
import ReviewItem from "./review-item";

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
        <AddReviewModal />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {reviews.data.map((review) => (
          <ReviewItem
            key={review._id.toString()}
            review={{ ...review, _id: review._id.toString() }}
          />
        ))}
      </div>
    </section>
  );
}

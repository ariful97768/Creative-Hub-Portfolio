export default function TestimonialForm() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-10 mt-5">
        Add New Testimonial
      </h1>
      <div className="w-max mx-auto space-y-3">
        <div className="flex gap-2 flex-col">
          <label htmlFor="image">Client Profile</label>
          <input
            id="image"
            name="image"
            type="file"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="clientCountry">Client Country</label>
          <input
            id="clientCountry"
            name="clientCountry"
            type="text"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="China"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="Google"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            type="text"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="CEO"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            name="review"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="Client's review"
          />
        </div>
      </div>
    </>
  );
}

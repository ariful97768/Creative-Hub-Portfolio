export default function TeamForm() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-10 mt-5">
        Add New Team
      </h1>
      <div className="w-max mx-auto space-y-3">
        <div className="flex gap-2 flex-col">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="John Doe"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="joiningDate">Joining Date</label>
          <input
            id="joiningDate"
            name="joiningDate"
            type="date"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="John Doe"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            name="salary"
            type="number"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="100000"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            name="about"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="CEO"
          />
        </div>
      </div>
    </>
  );
}

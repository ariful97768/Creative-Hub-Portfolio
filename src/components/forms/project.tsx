
export default function ProjectForm() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-10 mt-5">
        Add New Project
      </h1>
      <div className="w-max mx-auto space-y-3">
        <div className="flex gap-2 flex-col">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark"
            placeholder="John Doe"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="link">Project Link</label>
          <input
            id="link"
            name="link"
            type="url"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="https://example.com"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark focus:border-indigo-500"
            placeholder="Project Description"
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
      </div>
    </>
  );
}

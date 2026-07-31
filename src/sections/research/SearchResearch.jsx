export default function SearchResearch() {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
  
          <h2 className="text-3xl font-bold text-gray-900">
            Discover Research
          </h2>
  
          <p className="mt-4 text-gray-600">
            Search projects, researchers, publications, and organizations.
          </p>
  
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
  
            <input
              type="text"
              placeholder="Search research..."
              className="flex-1 rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500"
            />
  
            <button
              className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Search
            </button>
  
          </div>
  
        </div>
      </section>
    );
  }
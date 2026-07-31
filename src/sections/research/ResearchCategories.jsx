const categories = [
    "Electrical Engineering",
    "Electronics",
    "Computer Science",
    "Artificial Intelligence",
    "Robotics",
    "Renewable Energy",
    "Telecommunications",
    "Embedded Systems",
  ];
  
  export default function ResearchCategories() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
  
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Research Categories
          </h2>
  
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-800">
                  {category}
                </h3>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }
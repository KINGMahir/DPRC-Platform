const statistics = [
    {
      title: "Members",
      value: "0+",
      description: "Registered engineers and researchers",
    },
    {
      title: "Projects",
      value: "0+",
      description: "Engineering & research projects",
    },
    {
      title: "Publications",
      value: "0+",
      description: "Research papers and technical reports",
    },
    {
      title: "Organizations",
      value: "1",
      description: "Engineering organization on the platform",
    },
  ];
  
  export default function StatisticsSection() {
    return (
      <section className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">
              Building the Future of Engineering
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-blue-200">
              Every engineer, researcher, project, and publication contributes
              to a growing ecosystem of innovation.
            </p>
          </div>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-blue-900 p-8 text-center shadow-lg"
              >
                <h3 className="text-5xl font-extrabold text-cyan-400">
                  {item.value}
                </h3>
  
                <p className="mt-4 text-xl font-semibold">
                  {item.title}
                </p>
  
                <p className="mt-2 text-sm text-blue-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
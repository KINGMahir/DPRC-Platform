const stats = [
    {
      number: "100+",
      label: "Research Projects",
    },
    {
      number: "500+",
      label: "Researchers",
    },
    {
      number: "250+",
      label: "Publications",
    },
    {
      number: "50+",
      label: "Organizations",
    },
  ];
  
  export default function ResearchStats() {
    return (
      <section className="bg-blue-900 py-20 text-white">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Research Ecosystem
            </h2>
  
            <p className="mt-4 text-blue-100">
              Building a connected engineering research community.
            </p>
          </div>
  
  
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur"
              >
  
                <h3 className="text-4xl font-extrabold">
                  {stat.number}
                </h3>
  
                <p className="mt-3 text-blue-100">
                  {stat.label}
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
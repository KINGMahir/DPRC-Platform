const publications = [
    {
      title: "IoT Based Power Monitoring System",
      author: "DPRC Electrical Research Team",
      type: "Technical Paper",
      year: "2026",
    },
    {
      title: "Machine Learning Applications in Engineering",
      author: "DPRC AI Research Group",
      type: "Research Article",
      year: "2026",
    },
    {
      title: "Renewable Energy Integration Study",
      author: "DPRC Energy Team",
      type: "Research Report",
      year: "2026",
    },
  ];
  
  export default function RecentPublications() {
    return (
      <section className="bg-gray-50 py-20">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Recent Publications
          </h2>
  
  
          <div className="mt-10 grid gap-6 md:grid-cols-3">
  
            {publications.map((paper) => (
              <div
                key={paper.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
  
                <h3 className="text-xl font-bold text-gray-900">
                  {paper.title}
                </h3>
  
                <p className="mt-3 text-gray-600">
                  {paper.author}
                </p>
  
                <div className="mt-4 text-sm text-blue-700">
                  {paper.type} • {paper.year}
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
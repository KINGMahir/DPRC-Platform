const researchProjects = [
    {
      title: "Smart Grid Energy Monitoring",
      category: "Electrical Engineering",
      status: "In Progress",
      description:
        "Developing an intelligent monitoring system for electrical power distribution using IoT and real-time analytics.",
    },
    {
      title: "Autonomous Agricultural Drone",
      category: "Robotics",
      status: "Planning",
      description:
        "Designing an autonomous drone for crop monitoring, mapping, and precision agriculture.",
    },
    {
      title: "AI-Based Fault Detection",
      category: "Artificial Intelligence",
      status: "Research",
      description:
        "Applying machine learning techniques to identify electrical equipment faults before failure.",
    },
  ];
  
  export default function LatestResearchSection() {
    return (
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Latest Research
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore engineering projects and research initiatives currently
              being developed within the DPRC Platform.
            </p>
          </div>
  
          <div className="grid gap-8 lg:grid-cols-3">
            {researchProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {project.category}
                </span>
  
                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
  
                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>
  
                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {project.status}
                  </span>
  
                  <button className="font-semibold text-blue-700 hover:text-blue-900">
                    View Project →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
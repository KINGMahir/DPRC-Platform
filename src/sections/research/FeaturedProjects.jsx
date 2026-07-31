const projects = [
    {
      title: "Smart Grid Monitoring System",
      category: "Electrical Engineering",
      status: "Active Research",
      description:
        "An intelligent monitoring system for improving power grid reliability using IoT and data analysis.",
      team: "DPRC Energy Research Team",
    },
    {
      title: "Autonomous Drone Platform",
      category: "Robotics",
      status: "Prototype",
      description:
        "A research project focused on autonomous navigation, embedded systems, and aerial robotics.",
      team: "DPRC Robotics Team",
    },
    {
      title: "Renewable Energy Storage System",
      category: "Renewable Energy",
      status: "Research Phase",
      description:
        "Exploring efficient energy storage solutions for sustainable power systems.",
      team: "DPRC Renewable Energy Group",
    },
  ];
  
  export default function FeaturedProjects() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Research Projects
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore innovative engineering projects created by researchers
              and collaborative teams.
            </p>
          </div>
  
  
          <div className="mt-12 grid gap-8 md:grid-cols-3">
  
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
  
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {project.category}
                </span>
  
  
                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
  
  
                <p className="mt-3 text-gray-600">
                  {project.description}
                </p>
  
  
                <div className="mt-6 border-t pt-4 text-sm">
  
                  <p>
                    <strong>Status:</strong> {project.status}
                  </p>
  
                  <p className="mt-2">
                    <strong>Team:</strong> {project.team}
                  </p>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }
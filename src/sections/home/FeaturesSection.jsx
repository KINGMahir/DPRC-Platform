import {
    FaFlask,
    FaProjectDiagram,
    FaUsers,
    FaBookOpen,
    FaRobot,
    FaLaptopCode,
  } from "react-icons/fa";
  
  const features = [
    {
      icon: <FaFlask className="text-4xl text-blue-600" />,
      title: "Research Collaboration",
      description:
        "Collaborate on engineering research projects with students, researchers, and industry professionals.",
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-blue-600" />,
      title: "Project Management",
      description:
        "Create, manage, and track engineering projects from concept to completion.",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Organizations & Teams",
      description:
        "Build organizations, departments, laboratories, and collaborative engineering teams.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-blue-600" />,
      title: "Publications",
      description:
        "Publish research papers, technical reports, documentation, and engineering resources.",
    },
    {
      icon: <FaRobot className="text-4xl text-blue-600" />,
      title: "AI Engineering Assistant",
      description:
        "Use intelligent tools for research discovery, documentation, recommendations, and productivity.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      title: "Cross-Platform Workspace",
      description:
        "Access the DPRC Platform from web, desktop, tablet, and mobile with a unified experience.",
    },
  ];
  
  export default function FeaturesSection() {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">
              Platform Features
            </h2>
  
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Everything engineers, researchers, educators, and organizations
              need to collaborate, innovate, and build impactful technology.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6">{feature.icon}</div>
  
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
  
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
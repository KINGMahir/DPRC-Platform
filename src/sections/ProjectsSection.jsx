import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    { title: "Smart Drone Project", description: "Autonomous drones for research and survey." },
    { title: "AI Health Platform", description: "Predictive healthcare using AI algorithms." },
    { title: "Renewable Energy Grid", description: "Smart grid integration for renewable energy." },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

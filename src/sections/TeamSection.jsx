import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    { name: "Dr. Namir Sain", role: "Lead Researcher" },
    { name: "Prof. Ayesha Khan", role: "AI Specialist" },
    { name: "Mr. Rahim Ali", role: "Energy Engineer" },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl text-center transition-shadow duration-300"
          >
            <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
              {member.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h3 className="font-semibold text-xl">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

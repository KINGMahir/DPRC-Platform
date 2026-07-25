import { motion } from "framer-motion";

export default function EventsSection() {
  const events = [
    { title: "Annual Research Meet", date: "July 2025" },
    { title: "AI Workshop", date: "August 2025" },
    { title: "Renewable Energy Summit", date: "September 2025" },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
            <p className="text-gray-700">{event.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

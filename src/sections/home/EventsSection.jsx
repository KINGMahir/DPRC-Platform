const events = [
    {
      title: "National Engineering Research Workshop",
      date: "Coming Soon",
      location: "Dhaka Polytechnic Institute",
      description:
        "A collaborative workshop where students, researchers, and industry professionals share innovative engineering ideas.",
    },
    {
      title: "DPRC Innovation Challenge",
      date: "Coming Soon",
      location: "DPRC Platform",
      description:
        "An engineering competition encouraging practical solutions to real-world technical problems.",
    },
    {
      title: "Research Paper Presentation",
      date: "Coming Soon",
      location: "Hybrid Event",
      description:
        "Present ongoing research projects, receive expert feedback, and connect with collaborators.",
    },
  ];
  
  export default function EventsSection() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Upcoming Events
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Participate in workshops, competitions, seminars, and research
              activities organized through the DPRC Platform.
            </p>
          </div>
  
          <div className="grid gap-8 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {event.date}
                  </span>
                </div>
  
                <h3 className="text-2xl font-bold text-gray-900">
                  {event.title}
                </h3>
  
                <p className="mt-3 font-medium text-blue-700">
                  {event.location}
                </p>
  
                <p className="mt-4 text-gray-600">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
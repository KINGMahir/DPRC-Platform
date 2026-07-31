import { Link } from "react-router-dom";

export default function JoinSection() {
  return (
    <section className="bg-blue-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Join the Future of Engineering Research
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Connect with researchers, collaborate on innovative projects,
          publish your work, and become part of a growing engineering ecosystem.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-blue-950 transition hover:bg-cyan-300"
          >
            Join the Platform
          </Link>

          <Link
            to="/research"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-900"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </section>
  );
}
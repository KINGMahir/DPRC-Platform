export default function AboutSection() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              About DPRC
            </h2>
  
            <p className="mx-auto max-w-4xl text-lg leading-8 text-gray-600">
              The <strong>Dhaka Polytechnic Research Club (DPRC)</strong> is an
              engineering and innovation community dedicated to advancing applied
              research, technical education, and interdisciplinary collaboration.
              Through the DPRC Platform, students, teachers, alumni, researchers,
              and industry partners can work together on research projects,
              publications, competitions, and real-world engineering solutions.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Applied Research
              </h3>
              <p className="text-gray-600">
                Promote practical engineering research that addresses real-world
                technical and industrial challenges.
              </p>
            </div>
  
            <div className="rounded-xl border border-gray-200 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Innovation
              </h3>
              <p className="text-gray-600">
                Encourage creativity, project development, innovation, and
                entrepreneurship among technical students.
              </p>
            </div>
  
            <div className="rounded-xl border border-gray-200 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Connect students, teachers, alumni, researchers, and industry to
                build a stronger engineering ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
import users from "../../../mock/users";

export default function ProjectsCard() {

  const user = users[0];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Projects
      </h2>


      <div className="grid gap-5 md:grid-cols-2">

        {user.projects.map((project) => (

          <div
            key={project.id}
            className="rounded-xl border border-gray-200 p-5 transition hover:shadow-md"
          >

            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>


            <p className="mt-3 text-sm text-gray-500">
              Status
            </p>


            <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">

              {project.status}

            </span>


          </div>

        ))}

      </div>

    </section>
  );
}
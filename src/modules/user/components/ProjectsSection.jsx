import users from "../../../mock/users/users";
import projects from "../../../mock/projects/projects";

import Badge from "../../../shared/components/Badge";
import EntityChip from "../../../shared/components/EntityChip";


export default function ProjectsSection() {

  const user = users[0];

  if (!user) {
    return null;
  }


  const userProjects = projects.filter((project) =>
    user.projectIds.includes(project.id)
  );


  return (

    <section className="py-20">


      <div className="mb-12">

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-xs
            font-semibold
            text-cyan-400
          "
        >
          Portfolio
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          Projects
        </h2>

      </div>





      <div className="space-y-10">


        {userProjects.map((project, index) => (

          <article
            key={project.id}
            className="
              grid
              gap-8
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              md:grid-cols-[120px_1fr]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:shadow-[0_0_30px_rgba(34,211,238,.12)]
            "
          >





            {/* Project Number */}

            <div
              className="
                text-6xl
                font-bold
                text-cyan-400/30

                transition-all
                duration-300

                hover:text-cyan-400
                hover:drop-shadow-[0_0_15px_rgba(34,211,238,.5)]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </div>








            {/* Content */}

            <div>


              <div
                className="
                  flex
                  flex-col
                  gap-4

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {project.title}
                </h3>




                <div
                  className="
                    transition-all
                    duration-300

                    hover:scale-105
                    hover:drop-shadow-[0_0_12px_rgba(34,211,238,.35)]
                  "
                >

                  <Badge variant="blue">
                    {project.status}
                  </Badge>

                </div>


              </div>







              <p
                className="
                  mt-5
                  leading-8
                  opacity-75
                "
              >
                {project.description}
              </p>









              {/* Technology Stack */}

              <div className="mt-8">


                <p
                  className="
                    mb-3
                    text-xs
                    uppercase
                    tracking-wider
                    font-semibold
                    opacity-60
                  "
                >
                  Technology Stack
                </p>



                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {project.technologies.map((tech) => (

                    <EntityChip
                      key={tech.id}
                      variant="technology"
                    >
                      {tech.name}
                    </EntityChip>

                  ))}

                </div>


              </div>









              {/* Research Areas */}

              <div className="mt-7">


                <p
                  className="
                    mb-3
                    text-xs
                    uppercase
                    tracking-wider
                    font-semibold
                    opacity-60
                  "
                >
                  Research Areas
                </p>



                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {project.researchAreas.map((area) => (

                    <EntityChip
                      key={area.id}
                      variant="research"
                    >
                      {area.name}
                    </EntityChip>

                  ))}

                </div>


              </div>









              {/* Footer */}

              <div
                className="
                  mt-8
                  border-t
                  border-white/10
                  pt-5
                  text-sm
                  opacity-60
                "
              >

                Built under:

                <span
                  className="
                    ml-2
                    font-semibold
                    text-white
                  "
                >
                  {project.organization.name}
                </span>


              </div>





            </div>


          </article>


        ))}


      </div>


    </section>

  );

}
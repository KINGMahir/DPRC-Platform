import users from "../../../mock/users/users";
import projects from "../../../mock/projects/projects";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";
import EntityChip from "../../../shared/components/EntityChip";

export default function ProjectsCard() {
  const user = users[0];

  if (!user) {
    return null;
  }

  const userProjects = projects.filter((project) =>
    user.projectIds.includes(project.id)
  );

  return (
    <Card>
      <h2
        className="
          mb-6
          text-2xl
          font-bold
        "
      >
        Projects
      </h2>

      <div
        className="
          grid
          gap-5
          lg:grid-cols-2
        "
      >
        {userProjects.map((project) => (
          <div
            key={project.id}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-6
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:shadow-[0_0_25px_rgba(34,211,238,.15)]
            "
          >
            <div
              className="
                flex
                items-start
                justify-between
                gap-4
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                "
              >
                {project.title}
              </h3>

              <Badge variant="blue">
                {project.status}
              </Badge>
            </div>

            <p
              className="
                mt-4
                text-sm
                opacity-75
              "
            >
              {project.description}
            </p>

            {/* Technologies */}

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold opacity-70">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
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

            {/* Research */}

            <div className="mt-5">
              <h4 className="mb-3 text-sm font-semibold opacity-70">
                Research
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.researchAreas.map((research) => (
                  <EntityChip
                    key={research.id}
                    variant="research"
                  >
                    {research.name}
                  </EntityChip>
                ))}
              </div>
            </div>

            {/* Organization */}

            <div className="mt-5">
              <h4 className="mb-3 text-sm font-semibold opacity-70">
                Organization
              </h4>

              <EntityChip variant="organization">
                {project.organization.name}
              </EntityChip>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
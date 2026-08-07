import users from "../../../mock/users/users";
import organizations from "../../../mock/organizations/organizations";

import EntityAvatar from "../../../shared/components/EntityAvatar";
import EntityChip from "../../../shared/components/EntityChip";
import StatusBadge from "../../../shared/components/StatusBadge";

export default function OrganizationsSection() {

  const user = users[0];

  if (!user) return null;


  const userOrganizations = organizations.filter(org =>
    user.organizationIds.includes(org.id)
  );


  return (

    <section
      className="
        py-20
      "
    >

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
          Affiliations
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          Organizations
        </h2>

      </div>




      <div className="space-y-10">


        {userOrganizations.map((org) => (

          <article
            key={org.id}
            className="
              rounded-3xl

              border
              border-white/10

              bg-white/[0.03]

              p-8

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:shadow-[0_0_30px_rgba(34,211,238,.12)]
            "
          >


            {/* Header */}

            <div
              className="
                flex
                flex-col

                gap-6

                md:grid
                md:grid-cols-[auto_1fr]
                md:items-center
              "
            >

              <EntityAvatar
                image={org.logo}
                title={org.shortName}
                type="organization"
                size="xl"
              />



              <div className="flex-1">


                <div
                  className="
                    flex
                    flex-col

                    gap-3

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
                    {org.name}
                  </h3>



                  <div
                    className="
                      transition-all
                      duration-300

                      hover:scale-105
                      hover:drop-shadow-[0_0_12px_rgba(34,211,238,.35)]
                    "
                  >

                    <StatusBadge>
                      {org.role}
                    </StatusBadge>

                  </div>


                </div>




                <p
                  className="
                    mt-2
                    opacity-60
                  "
                >
                  {org.type}
                </p>


              </div>


            </div>









            {/* Tagline */}

            <blockquote
              className="
                mt-8

                border-l-2
                border-cyan-400/40

                pl-5

                text-xl

                italic

                opacity-80
              "
            >
              {org.tagline}
            </blockquote>









            {/* Description */}

            <p
              className="
                mt-6

                leading-8

                opacity-75
              "
            >
              {org.description}
            </p>









            {/* Focus Areas */}

            <div className="mt-8">


              <p
                className="
                  mb-4

                  text-sm

                  font-semibold

                  uppercase

                  tracking-wider

                  opacity-60
                "
              >
                Research Focus
              </p>




              <div
                className="
                  flex

                  flex-wrap

                  gap-3
                "
              >

                {org.focusAreas.map(area => (

                  <EntityChip
                    key={area.id}
                    variant="research"
                  >
                    {area.name}
                  </EntityChip>

                ))}


              </div>


            </div>









            {/* Organization Metrics */}

            <div
              className="
                mt-10

                grid

                grid-cols-3

                divide-x

                divide-white/10

                rounded-2xl

                border

                border-white/10

                bg-black/10

                py-5

                text-center
              "
            >


              <div>

                <p className="text-2xl font-bold">
                  {org.memberCount}
                </p>

                <p className="text-sm opacity-60">
                  Members
                </p>

              </div>





              <div>

                <p className="text-2xl font-bold">
                  {org.projectCount}
                </p>

                <p className="text-sm opacity-60">
                  Projects
                </p>

              </div>





              <div>

                <p className="text-2xl font-bold">
                  {org.publicationCount}
                </p>

                <p className="text-sm opacity-60">
                  Publications
                </p>

              </div>


            </div>



          </article>


        ))}


      </div>


    </section>

  );

}
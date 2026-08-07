import users from "../../../mock/users/users";

import EntityChip from "../../../shared/components/EntityChip";
import StatusBadge from "../../../shared/components/StatusBadge";
import PeriodDisplay from "../../../shared/components/PeriodDisplay";


export default function ExperienceSection() {

  const user = users[0];

  if (!user) {
    return null;
  }


  return (

    <section
      className="
        py-20
        select-none
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
          Professional Journey
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          Experience
        </h2>

      </div>





      <div
        className="
          grid
          gap-8
          lg:grid-cols-2
        "
      >


        {user.experience.map((item) => (

          <article
            key={item.id}
            className="
              group
              relative
              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-white/[0.03]

              p-8

              transition-all
              duration-300
              ease-out

              hover:-translate-y-2

              hover:border-cyan-400/30

              hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
            "
          >


            {/* Hover Accent Line */}

            <div
              className="
                absolute
                left-0
                top-0

                h-full
                w-1

                bg-cyan-400

                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />






            {/* Header */}

            <div
              className="
                flex
                flex-col

                gap-5
              "
            >


              <div>

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {item.position}
                </h3>



                <div
                  className="
                    mt-4
                  "
                >

                  <EntityChip
                    variant="organization"
                  >
                    {item.organization.name}
                  </EntityChip>

                </div>


              </div>







              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-4
                "
              >

                <StatusBadge>
                  {item.status}
                </StatusBadge>



                <PeriodDisplay
                  start={item.startYear}
                  end={item.endYear}
                />


              </div>


            </div>








            {/* Divider */}

            <div
              className="
                my-8

                h-px

                bg-white/10
              "
            />









            {/* Field */}

            <div>

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
                Field
              </p>



              <EntityChip
                variant="research"
              >
                {item.field}
              </EntityChip>


            </div>









            {/* Description */}

            <p
              className="
                mt-8

                leading-8

                opacity-75
              "
            >
              {item.description}
            </p>





          </article>


        ))}


      </div>


    </section>

  );

}
import users from "../../../mock/users/users";
import skills from "../../../mock/skills/skills";

import EntityChip from "../../../shared/components/EntityChip";


export default function SkillsSection() {

  const user = users[0];


  if (!user) {
    return null;
  }


  const userSkills = skills.filter((skill) =>
    user.skillIds.includes(skill.id)
  );



  const groupedSkills = userSkills.reduce((fields, skill) => {


    if (!fields[skill.field]) {
      fields[skill.field] = {};
    }


    if (!fields[skill.field][skill.domain]) {
      fields[skill.field][skill.domain] = [];
    }


    fields[skill.field][skill.domain].push(skill);


    return fields;


  }, {});




  return (

    <section
      className="
        py-20
        select-none
      "
    >



      <div
        className="
          mb-12
        "
      >

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-xs
            font-semibold
            text-cyan-400
          "
        >
          Technical Capability
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          Skills
        </h2>


      </div>







      <div
        className="
          grid
          gap-8
          lg:grid-cols-2
        "
      >



        {Object.entries(groupedSkills).map(
          ([field, domains]) => (


            <article
              key={field}
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

                hover:-translate-y-1

                hover:border-cyan-400/30

                hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
              "
            >



              {/* Background Glow */}

              <div
                className="
                  absolute
                  -right-16
                  -top-16

                  h-32
                  w-32

                  rounded-full

                  bg-cyan-400/10

                  blur-3xl

                  opacity-0

                  transition-all
                  duration-500

                  group-hover:opacity-100
                "
              />






              {/* Field Header */}

              <div
                className="
                  relative

                  flex
                  items-center
                  gap-4
                "
              >


                <div
                  className="
                    h-3
                    w-3

                    rounded-full

                    bg-cyan-400

                    opacity-0
                    scale-0

                    transition-all
                    duration-300

                    group-hover:opacity-100
                    group-hover:scale-100

                    group-hover:shadow-[0_0_12px_rgba(34,211,238,.8)]
                  "
                />


                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {field}
                </h3>


              </div>









              <div
                className="
                  mt-8
                  space-y-8
                "
              >



                {Object.entries(domains).map(
                  ([domain, domainSkills]) => (


                    <div
                      key={domain}
                      className="
                        rounded-2xl

                        border
                        border-white/10

                        bg-black/10

                        p-5

                        transition-all
                        duration-300

                        hover:border-cyan-400/20
                      "
                    >



                      <p
                        className="
                          mb-4

                          text-xs

                          uppercase

                          tracking-[0.2em]

                          font-semibold

                          opacity-60
                        "
                      >
                        {domain}
                      </p>






                      <div
                        className="
                          flex
                          flex-wrap
                          gap-3
                        "
                      >


                        {domainSkills.map((skill) => (


                          <EntityChip
                            key={skill.id}
                            variant="skill"
                          >
                            {skill.name}
                          </EntityChip>


                        ))}


                      </div>




                    </div>


                  )

                )}



              </div>





            </article>


          )

        )}



      </div>



    </section>

  );

}
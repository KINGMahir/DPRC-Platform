import users from "../../../mock/users/users";
import skills from "../../../mock/skills/skills";

import Card from "../../../shared/components/Card";
import EntityChip from "../../../shared/components/EntityChip";


export default function SkillsCard() {

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

    <Card>


      <h2
        className="
          text-2xl
          font-bold
          tracking-tight
        "
      >
        Skills
      </h2>


      <div
        className="
          mt-4
          h-px
          w-full
          bg-white/10
        "
      />



      <div
        className="
          mt-8
          space-y-10
        "
      >


        {Object.entries(groupedSkills).map(
          ([field, domains]) => (

            <div key={field}>


              {/* Field */}

              <h3
                className="
                  text-xl
                  font-semibold
                "
              >
                {field}
              </h3>



              <div
                className="
                  mt-5
                  space-y-6
                  pl-4
                "
              >


                {Object.entries(domains).map(
                  ([domain, domainSkills]) => (


                    <div key={domain}>


                      {/* Domain */}

                      <h4
                        className="
                          mb-3
                          text-sm
                          font-medium
                          uppercase
                          tracking-wider
                          opacity-60
                        "
                      >
                        {domain}
                      </h4>



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


            </div>


          )
        )}


      </div>


    </Card>

  );

}
import users from "../../../mock/users";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function SkillsCard() {

  const user = users[0];


  if (!user) {
    return null;
  }


  return (

    <Card>


      <h2 className="
        mb-6
        text-2xl
        font-bold
      ">
        Skills
      </h2>



      <div className="
        flex
        flex-wrap
        gap-3
      ">


        {user.skills.map((skill) => (

          <Badge
            key={skill}
            variant="blue"
          >
            {skill}
          </Badge>

        ))}


      </div>


    </Card>

  );

}
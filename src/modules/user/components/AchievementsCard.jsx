import users from "../../../mock/users";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function AchievementsCard() {

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
        Achievements
      </h2>



      <div className="space-y-4">


        {user.achievements.map((achievement, index) => (

          <div
            key={index}
            className="
              flex
              items-start
              gap-4
              rounded-xl
              border
              border-gray-200
              p-4
            "
          >


            <Badge variant="green">
              ✓
            </Badge>


            <p className="
              text-gray-700
              leading-relaxed
            ">
              {achievement}
            </p>


          </div>

        ))}


      </div>


    </Card>

  );

}
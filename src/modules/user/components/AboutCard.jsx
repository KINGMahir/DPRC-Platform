import users from "../../../mock/users";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function AboutCard() {

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
        About
      </h2>


      <p className="
        leading-relaxed
        text-gray-700
      ">
        {user.bio}
      </p>



      <div className="mt-8">

        <h3 className="
          mb-3
          text-lg
          font-semibold
        ">
          Mission
        </h3>


        <p className="
          text-gray-700
        ">
          {user.mission}
        </p>


      </div>



      <div className="mt-8">


        <h3 className="
          mb-3
          text-lg
          font-semibold
        ">
          Research Interests
        </h3>



        <div className="
          flex
          flex-wrap
          gap-2
        ">

          {user.researchInterests.map((item) => (

            <Badge
              key={item}
              variant="blue"
            >
              {item}
            </Badge>

          ))}


        </div>


      </div>


    </Card>

  );

}
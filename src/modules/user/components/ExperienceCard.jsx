import users from "../../../mock/users/users";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function ExperienceCard() {

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
        Experience
      </h2>



      <div className="space-y-5">


        {user.experience.map((item) => (

          <div
            key={item.id}
            className="
              relative
              border-l-2
              border-blue-200
              pl-6
            "
          >


            {/* Timeline dot */}

            <div className="
              absolute
              -left-[7px]
              top-1
              h-3
              w-3
              rounded-full
              bg-blue-600
            " />



            <div className="
              rounded-xl
              border
              border-gray-200
              p-5
            ">


              <div className="
                flex
                flex-col
                gap-2
                sm:flex-row
                sm:items-center
                sm:justify-between
              ">


                <h3 className="
                  text-lg
                  font-semibold
                ">
                  {item.position}
                </h3>


                <Badge variant="green">
                  {item.duration}
                </Badge>


              </div>



              <p className="
                mt-2
                text-gray-600
              ">
                {item.company}
              </p>


            </div>


          </div>

        ))}


      </div>


    </Card>

  );

}
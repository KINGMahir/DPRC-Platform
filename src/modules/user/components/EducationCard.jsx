import users from "../../../mock/users";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function EducationCard() {

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
        Education
      </h2>



      <div className="space-y-5">


        {user.education.map((item) => (

          <div
            key={item.id}
            className="
              rounded-xl
              border
              border-gray-200
              p-5
            "
          >


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
                {item.institute}
              </h3>


              <Badge variant="green">
                {item.year}
              </Badge>


            </div>



            <p className="
              mt-2
              text-gray-600
            ">
              {item.degree}
            </p>


          </div>

        ))}


      </div>


    </Card>

  );

}
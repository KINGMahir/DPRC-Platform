import users from "../../../mock/users";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function PublicationsCard() {

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
        Publications
      </h2>



      <div className="space-y-5">


        {user.publications.map((publication) => (

          <div
            key={publication.id}
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
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            ">


              <h3 className="
                text-lg
                font-semibold
              ">
                {publication.title}
              </h3>


              <Badge variant="blue">
                {publication.type}
              </Badge>


            </div>



          </div>

        ))}


      </div>


    </Card>

  );

}
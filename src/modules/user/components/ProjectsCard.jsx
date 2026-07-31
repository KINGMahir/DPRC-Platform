import users from "../../../mock/users";

import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function ProjectsCard() {

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
        Projects
      </h2>



      <div className="
        grid
        gap-5
        md:grid-cols-2
      ">


        {user.projects.map((project) => (

          <div
            key={project.id}
            className="
              rounded-xl
              border
              border-gray-200
              p-5
              transition
              hover:shadow-md
            "
          >


            <div className="
              flex
              items-start
              justify-between
              gap-3
            ">


              <h3 className="
                text-lg
                font-semibold
              ">
                {project.title}
              </h3>


              <Badge variant="blue">
                {project.status}
              </Badge>


            </div>


            <p className="
              mt-3
              text-sm
              text-gray-600
            ">
              Engineering research and development project.
            </p>


          </div>

        ))}


      </div>


    </Card>

  );

}
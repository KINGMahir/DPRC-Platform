import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaEdit,
} from "react-icons/fa";

import users from "../../../mock/users/users";

import Card from "../../../shared/components/Card";
import Button from "../../../shared/components/Button";
import Avatar from "../../../shared/components/Avatar";
import Badge from "../../../shared/components/Badge";


export default function ProfileHeader() {

  const user = users[0];


  if (!user) {
    return (
      <Card>
        User data not found
      </Card>
    );
  }


  return (

    <Card className="overflow-hidden p-0">


      {/* Cover */}
      <div className="
        h-52
        bg-gradient-to-r
        from-blue-900
        via-blue-700
        to-cyan-500
      " />


      <div className="px-8 pb-8">


        {/* Main profile */}
        <div className="
          -mt-20
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-end
          lg:justify-between
        ">


          <div className="
            flex
            items-end
            gap-6
          ">


            <Avatar
              name={user.name}
              image={user.avatar}
              size="large"
            />


            <div className="pb-2">


              <h1 className="
                text-4xl
                font-bold
              ">
                {user.name}
              </h1>


              <p className="
                text-blue-700
                font-medium
              ">
                @{user.username}
              </p>


              <div className="mt-2 flex flex-wrap gap-2">

                <Badge>
                  Founder
                </Badge>

                <Badge variant="green">
                  Researcher
                </Badge>

              </div>


              <p className="
                mt-3
                text-gray-600
              ">
                {user.headline}
              </p>


            </div>

          </div>



          <Button>

            <span className="flex items-center gap-2">

              <FaEdit />

              Edit Profile

            </span>

          </Button>



        </div>



        {/* Information */}

        <div className="
          mt-8
          grid
          gap-6
          lg:grid-cols-2
        ">



          <div className="
            space-y-4
            text-gray-700
          ">


            <div className="flex gap-3 items-center">

              <FaMapMarkerAlt className="text-blue-600"/>

              {user.location}

            </div>



            <div className="flex gap-3 items-center">

              <FaEnvelope className="text-blue-600"/>

              {user.email}

            </div>



            <div className="flex gap-3 items-center">

              <FaGlobe className="text-blue-600"/>

              {user.website}

            </div>



          </div>




          {/* Stats */}

          <div className="
            grid
            grid-cols-2
            gap-4
            md:grid-cols-4
          ">


            <Stat
              value={user.statistics.projects}
              label="Projects"
            />

            <Stat
              value={user.statistics.publications}
              label="Publications"
            />

            <Stat
              value={user.statistics.organizations}
              label="Organizations"
            />

            <Stat
              value={user.statistics.contributions}
              label="Contributions"
            />


          </div>


        </div>


      </div>


    </Card>

  );
}



function Stat({value,label}) {

  return (

    <div className="
      rounded-xl
      border
      p-4
      text-center
    ">

      <h3 className="
        text-2xl
        font-bold
        text-blue-700
      ">
        {value}
      </h3>


      <p className="
        text-sm
        text-gray-600
      ">
        {label}
      </p>


    </div>

  );

}
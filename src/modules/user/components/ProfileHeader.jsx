import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaEdit,
  FaProjectDiagram,
  FaBook,
  FaUsers,
  FaCode,
} from "react-icons/fa";

import users from "../../../mock/users/users";

import Card from "../../../shared/components/Card";
import Button from "../../../shared/components/Button";
import Avatar from "../../../shared/components/Avatar";
import Badge from "../../../shared/components/Badge";
import EntityChip from "../../../shared/components/EntityChip";


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

      <div
        className="
          relative
          h-60

          bg-gradient-to-r
          from-violet-950
          via-cyan-800
          to-cyan-400
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-black/20
          "
        />


        <div
          className="
            absolute
            bottom-6
            left-8
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/70
            "
          >
            Engineering Profile
          </p>


        </div>


      </div>






      <div
        className="
          px-8
          pb-10
        "
      >





        {/* Identity */}


        <div
          className="
            -mt-20

            flex
            flex-col

            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >



          <div
            className="
              flex
              flex-col
              sm:flex-row

              items-start
              sm:items-end

              gap-6
            "
          >



            <div
              className="
                rounded-full

                border
                border-white/20

                bg-black/30

                p-2
              "
            >

              <Avatar
                name={user.name}
                image={user.avatar}
                size="large"
              />


            </div>







            <div
              className="
                pb-3
              "
            >



              <h1
                className="
                  text-4xl
                  font-bold
                "
              >
                {user.name}
              </h1>




              <p
                className="
                  mt-1
                  text-cyan-300
                  font-medium
                "
              >
                @{user.username}
              </p>





              <div
                className="
                  mt-4

                  flex
                  flex-wrap

                  gap-3
                "
              >

                <Badge variant="violet">
                  Founder
                </Badge>


                <Badge variant="green">
                  Researcher
                </Badge>


                <Badge>
                  Open Source
                </Badge>


              </div>





            </div>



          </div>







          <Button>

            <span
              className="
                flex
                items-center
                gap-2
              "
            >

              <FaEdit />

              Edit Profile

            </span>


          </Button>



        </div>








        {/* Statement */}


        <p
          className="
            mt-8

            max-w-4xl

            leading-8

            opacity-80
          "
        >
          {user.profileStatement}
        </p>









        {/* Contact + Stats */}


        <div
          className="
            mt-10

            grid

            gap-8

            lg:grid-cols-2
          "
        >





          {/* Contact */}


          <div
            className="
              space-y-4
            "
          >


            <div
              className="
                flex
                items-center
                gap-3
                opacity-80
              "
            >

              <FaMapMarkerAlt className="text-cyan-400"/>

              {user.location}

            </div>




            <div
              className="
                flex
                items-center
                gap-3
                opacity-80
              "
            >

              <FaEnvelope className="text-cyan-400"/>

              {user.email}

            </div>




            <div
              className="
                flex
                items-center
                gap-3
                opacity-80
              "
            >

              <FaGlobe className="text-cyan-400"/>

              {user.website}

            </div>


          </div>










          {/* Stats */}


          <div
            className="
              grid

              grid-cols-2

              gap-4

              sm:grid-cols-4
            "
          >


            <Stat
              icon={<FaProjectDiagram />}
              value={user.statistics.projects}
              label="Projects"
            />


            <Stat
              icon={<FaBook />}
              value={user.statistics.publications}
              label="Publications"
            />


            <Stat
              icon={<FaUsers />}
              value={user.statistics.organizations}
              label="Organizations"
            />


            <Stat
              icon={<FaCode />}
              value={user.statistics.contributions}
              label="Contributions"
            />


          </div>



        </div>









        {/* Research Interests */}


        <div
          className="
            mt-10
          "
        >


          <p
            className="
              mb-4

              text-xs

              uppercase

              tracking-[0.25em]

              opacity-60
            "
          >
            Research Interests
          </p>




          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >

            {user.researchInterests.map((item)=>(
              
              <EntityChip
                key={item}
                variant="research"
              >
                {item}
              </EntityChip>

            ))}


          </div>


        </div>





      </div>


    </Card>

  );

}







function Stat({
  icon,
  value,
  label,
}) {


  return (

    <div
      className="
        rounded-2xl

        border
        border-white/10

        bg-white/[0.03]

        p-4

        text-center

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-cyan-400/30

        hover:shadow-[0_0_25px_rgba(34,211,238,.15)]
      "
    >


      <div
        className="
          mb-2

          flex

          justify-center

          text-cyan-400

          text-xl
        "
      >
        {icon}
      </div>



      <p
        className="
          text-2xl
          font-bold
        "
      >
        {value}
      </p>



      <p
        className="
          mt-1

          text-xs

          uppercase

          tracking-wider

          opacity-60
        "
      >
        {label}
      </p>



    </div>

  );

}
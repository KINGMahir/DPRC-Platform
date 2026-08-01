import users from "../../../mock/users/users";
import education from "../../../mock/education/education";
import Card from "../../../shared/components/Card";
import PeriodDisplay from "../../../shared/components/PeriodDisplay";
import EntityChip from "../../../shared/components/EntityChip";
import StatusBadge from "../../../shared/components/StatusBadge";

export default function EducationCard() {

  const user = users[0];


  if (!user) {
    return null;
  }


  const userEducation = education.filter((item) =>
    user.educationIds.includes(item.id)
  );


  return (

    <Card>


      <h2
        className="
          text-2xl
          font-bold
          tracking-tight
        "
      >
        Education
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
          space-y-6
        "
      >


        {userEducation.map((item) => (

          <div
            key={item.id}
            className="
              relative
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-6
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:shadow-[0_0_25px_rgba(34,211,238,.12)]
            "
          >


            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-start
                sm:justify-between
              "
            >


              <div>


                <h3
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  {item.institution}
                </h3>


                <p
                  className="
                    mt-2
                    opacity-80
                  "
                >
                  {item.degree}
                </p>


              </div>



              <StatusBadge
                variant={
                  item.status === "Completed"
                    ? "success"
                    : "progress"
                }
              >
                {item.status}
              </StatusBadge>


            </div>



            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-3
              "
            >


              <EntityChip
                variant="technology"
              >
                {item.field}
              </EntityChip>


              <PeriodDisplay
                start={item.startYear}
                end={item.endYear}
              />


            </div>



          </div>

        ))}


      </div>


    </Card>

  );

}
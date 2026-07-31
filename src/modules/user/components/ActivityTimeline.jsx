import users from "../../../mock/users";

import Card from "../../../shared/components/Card";


export default function ActivityTimeline() {

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
        Activity Timeline
      </h2>



      <div className="space-y-6">


        {user.activityTimeline.map((item) => (

          <div
            key={item.id}
            className="
              relative
              flex
              gap-4
              pl-2
            "
          >


            {/* Timeline line */}

            <div className="
              relative
              flex
              justify-center
            ">


              <div className="
                mt-2
                h-3
                w-3
                rounded-full
                bg-blue-600
                z-10
              " />


            </div>



            <div>


              <p className="
                font-semibold
              ">
                {item.activity}
              </p>


              <p className="
                mt-1
                text-sm
                text-gray-500
              ">
                {item.date}
              </p>


            </div>


          </div>

        ))}


      </div>


    </Card>

  );

}
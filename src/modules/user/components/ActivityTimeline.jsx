import users from "../../../mock/users";

export default function ActivityTimeline() {

  const user = users[0];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Activity Timeline
      </h2>


      <div className="space-y-6">

        {user.activityTimeline.map((item) => (

          <div
            key={item.id}
            className="flex gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />


            <div>

              <p className="font-semibold">
                {item.activity}
              </p>


              <p className="text-sm text-gray-500">
                {item.date}
              </p>


            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
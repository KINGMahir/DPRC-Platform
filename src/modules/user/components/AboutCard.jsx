import users from "../../../mock/users";

export default function AboutCard() {

  const user = users[0];

  return (

    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">


      <h2 className="mb-6 text-2xl font-bold">
        About
      </h2>


      <p className="leading-relaxed text-gray-700">
        {user.bio}
      </p>



      <div className="mt-6">


        <h3 className="mb-3 text-lg font-semibold">
          Mission
        </h3>


        <p className="text-gray-700">
          {user.mission}
        </p>


      </div>



      <div className="mt-6">


        <h3 className="mb-3 text-lg font-semibold">
          Research Interests
        </h3>


        <div className="flex flex-wrap gap-2">


          {user.researchInterests.map((interest) => (

            <span
              key={interest}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {interest}
            </span>

          ))}


        </div>


      </div>


    </section>

  );
}
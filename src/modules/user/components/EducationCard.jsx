import users from "../../../mock/users";

export default function EducationCard() {

  const user = users[0];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Education
      </h2>


      <div className="space-y-5">

        {user.education.map((item) => (

          <div
            key={item.id}
            className="rounded-xl border border-gray-200 p-5"
          >

            <h3 className="text-lg font-semibold">
              {item.institute}
            </h3>


            <p className="mt-2 text-gray-600">
              {item.degree}
            </p>


            <p className="mt-1 text-sm text-gray-500">
              {item.year}
            </p>


          </div>

        ))}

      </div>

    </section>
  );
}
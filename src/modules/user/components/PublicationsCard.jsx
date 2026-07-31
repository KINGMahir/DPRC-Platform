import users from "../../../mock/users";

export default function PublicationsCard() {

  const user = users[0];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Publications
      </h2>


      <div className="space-y-5">

        {user.publications.map((publication) => (

          <div
            key={publication.id}
            className="rounded-xl border border-gray-200 p-5"
          >

            <h3 className="text-lg font-semibold">
              {publication.title}
            </h3>


            <p className="mt-2 text-gray-600">
              {publication.type}
            </p>


          </div>

        ))}

      </div>

    </section>
  );
}
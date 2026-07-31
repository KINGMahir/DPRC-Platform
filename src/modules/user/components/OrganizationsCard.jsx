import users from "../../../mock/users";

export default function OrganizationsCard() {

  const user = users[0];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Organizations
      </h2>


      <div className="space-y-5">

        {user.organizations.map((organization) => (

          <div
            key={organization.id}
            className="rounded-xl border border-gray-200 p-5"
          >

            <h3 className="text-lg font-semibold">
              {organization.name}
            </h3>


            <p className="mt-2 text-gray-600">
              {organization.role}
            </p>


          </div>

        ))}

      </div>

    </section>
  );
}
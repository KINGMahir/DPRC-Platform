import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaEdit } from "react-icons/fa";
import users from "../../../mock/users";

export default function ProfileHeader() {
  const user = users[0];

  if (!user) {
    return (
      <section className="rounded-2xl border border-red-200 bg-red-50 p-8">
        <p className="text-red-600 font-semibold">
          User data not found
        </p>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Cover */}
      <div className="h-52 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500" />

      <div className="px-8 pb-8">

        {/* Profile Header */}
        <div className="-mt-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="flex items-end gap-6">

            {/* Avatar */}
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-white bg-gray-200 text-5xl font-bold text-gray-500 shadow-lg">
              {user.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </div>


            <div className="pb-2">

              <h1 className="text-4xl font-bold">
                {user.name}
              </h1>

              <p className="font-medium text-blue-700">
                @{user.username}
              </p>

              <p className="mt-2 text-gray-600">
                {user.headline}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {user.role}
              </p>

            </div>

          </div>


          <button className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">

            <FaEdit />

            Edit Profile

          </button>

        </div>


        {/* Information */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">


          <div className="space-y-4 text-gray-700">


            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>{user.location}</span>
            </div>


            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>{user.email}</span>
            </div>


            <div className="flex items-center gap-3">
              <FaGlobe className="text-blue-600" />
              <span>{user.website}</span>
            </div>


          </div>


          {/* Statistics */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">


            <StatCard
              value={user.statistics.projects}
              label="Projects"
            />

            <StatCard
              value={user.statistics.publications}
              label="Publications"
            />

            <StatCard
              value={user.statistics.organizations}
              label="Organizations"
            />

            <StatCard
              value={user.statistics.contributions}
              label="Contributions"
            />


          </div>


        </div>

      </div>

    </section>
  );
}


function StatCard({ value, label }) {

  return (
    <div className="rounded-xl border p-4 text-center">

      <h3 className="text-2xl font-bold text-blue-700">
        {value}
      </h3>

      <p className="text-sm text-gray-600">
        {label}
      </p>

    </div>
  );
}
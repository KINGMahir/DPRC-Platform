import users from "../../../mock/users";

export default function AchievementsCard() {

  const user = users[0];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Achievements
      </h2>


      <div className="space-y-3">

        {user.achievements.map((achievement, index) => (

          <div
            key={index}
            className="rounded-xl border border-gray-200 p-4"
          >

            <p className="text-gray-700">
              {achievement}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
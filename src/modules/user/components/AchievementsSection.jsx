import users from "../../../mock/users/users";
import achievements from "../../../mock/achievements/achievements";

import Card from "../../../shared/components/Card";

export default function AchievementsCard() {
  const user = users[0];

  const userAchievements = achievements.filter((achievement) =>
    user.achievementIds.includes(achievement.id)
  );

  return (
    <Card>

      <h2 className="mb-8 text-2xl font-bold">
        Achievements
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {userAchievements.map((achievement) => (

          <div
            key={achievement.id}
            className="
              rounded-2xl
              border
              border-amber-300/30
              bg-gradient-to-br
              from-amber-500/10
              to-yellow-500/5
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-amber-400/60
              hover:shadow-[0_0_25px_rgba(251,191,36,.15)]
            "
          >

            <div className="flex items-start gap-4">

              <div className="text-4xl">
                {achievement.icon}
              </div>

              <div className="flex-1">

                <h3 className="text-lg font-bold">
                  {achievement.title}
                </h3>

                <p className="mt-1 text-sm opacity-70">
                  {achievement.organization}
                </p>

                <div className="mt-4 inline-block rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-300">
                  {achievement.year}
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}
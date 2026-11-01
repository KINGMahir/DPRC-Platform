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

    <div className="grid gap-5 md:grid-cols-2 justify-item-center">

        {userAchievements.map((achievement) => (

          <div
            key={achievement.id}
            className="
              group
              relative
              w-[200px]
              h-[160px]
              rounded-2xl
              border
              border-amber-300/30
              bg-gradient-to-br
              from-amber-500/10
              to-yellow-500/5
              p-2
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/60
              hover:shadow-[0_0_35px_rgba(255,255,255,.18)]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-2xl

                bg-gradient-to-r
                from-cyan-400/0
                via-white/15
                to fuchsia-400/0

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

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
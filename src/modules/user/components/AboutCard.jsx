import users from "../../../mock/users/users";

import Card from "../../../shared/components/Card";
import EntityChip from "../../../shared/components/EntityChip";

export default function AboutCard() {
  const user = users[0];

  if (!user) {
    return null;
  }

  return (
    <Card>

      {/* About */}

      <div>

        <h2
          className="
            text-2xl
            font-bold
            tracking-tight
          "
        >
          About
        </h2>

        <div
          className="
            mt-4
            h-px
            w-full
            bg-white/10
          "
        />

        <p
          className="
            mt-6
            leading-8
            opacity-80
          "
        >
          {user.bio}
        </p>

      </div>


      {/* Mission */}

      <div className="mt-10">

        <h3
          className="
            text-lg
            font-semibold
          "
        >
          Mission
        </h3>

        <div
          className="
            mt-3
            h-px
            w-full
            bg-white/10
          "
        />

        <p
          className="
            mt-5
            leading-8
            opacity-80
          "
        >
          {user.mission}
        </p>

      </div>


      {/* Research */}

      <div className="mt-10">

        <h3
          className="
            text-lg
            font-semibold
          "
        >
          Research Interests
        </h3>

        <div
          className="
            mt-3
            h-px
            w-full
            bg-white/10
          "
        />

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-3
          "
        >
          {user.researchInterests.map((interest) => (

            <EntityChip
              key={interest}
              variant="research"
            >
              {interest}
            </EntityChip>

          ))}
        </div>

      </div>

    </Card>
  );
}
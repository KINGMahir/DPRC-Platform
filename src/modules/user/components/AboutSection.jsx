import users from "../../../mock/users/users";
import HeroStatement from "../../../shared/typography/HeroStatement";
import ProfileSection from "../../../shared/profile/ProfileSection";
import EntityChip from "../../../shared/components/EntityChip";

export default function AboutCard() {
  const user = users[0];

  if (!user) return null;

  return (
    <ProfileSection
      subtitle="Introduction"
      title="About"
    >

    <HeroStatement>

      {user.profileStatement}

    </HeroStatement>

      {/* Biography */}

      <div className="mt-12">

        <h3
          className="
            text-lg
            font-semibold
          "
        >
          Biography
        </h3>

        <p
          className="
            mt-4
            leading-8
            opacity-80
          "
        >
          {user.bio}
        </p>

      </div>

      {/* Mission */}

      <div
        className="
          mt-12
          rounded-2xl
          border
          border-cyan-400/20
          bg-cyan-500/5
          p-6
        "
      >

        <p
          className="
            uppercase
            tracking-[0.2em]
            text-xs
            font-semibold
            text-cyan-400
          "
        >
          Mission
        </p>

        <p
          className="
            mt-4
            text-lg
            leading-8
          "
        >
          {user.mission}
        </p>

      </div>

      {/* Research Interests */}

      <div className="mt-12">

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

    </ProfileSection>
  );
}
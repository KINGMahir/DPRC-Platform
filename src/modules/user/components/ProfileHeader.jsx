import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaEdit,
  FaProjectDiagram,
  FaBook,
  FaUsers,
  FaCode,
} from "react-icons/fa";

import users from "../../../mock/users/users";

import Card from "../../../shared/components/Card";
import Button from "../../../shared/components/Button";
import Avatar from "../../../shared/components/Avatar";
import Badge from "../../../shared/components/Badge";
import EntityChip from "../../../shared/components/EntityChip";

function ProfileHeader() {
  const user = users[0];

  if (!user) {
    return <div>User data not found</div>;
  }

  return (
    <Card
      className="
        relative
        z-10
        mb-16
        overflow-hidden
        p-0

        xl:mb-28
      "
    >
      {/* Cover */}

      <div
        className="
          relative
          h-48

          bg-gradient-to-r
          from-violet-950
          via-cyan-800
          to-cyan-400

          sm:h-56
          xl:h-60
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-black/20
          "
        />

        <div
          className="
            absolute
            bottom-5
            left-5

            sm:bottom-6
            sm:left-6

            xl:left-8
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-white/70

              sm:tracking-[0.3em]
            "
          >
            Engineering Profile
          </p>
        </div>
      </div>

      {/* Profile Content */}

      <div
        className="
          px-5
          pb-7

          sm:px-6
          sm:pb-8

          xl:px-8
          xl:pb-10
        "
      >
        {/* Identity */}

        <div
          className="
            -mt-14

            flex
            flex-col

            gap-5

            sm:-mt-16
            sm:gap-6

            xl:-mt-20
            xl:gap-8

            xl:flex-row
            xl:items-end
            xl:justify-between
          "
        >
          {/* Identity Information */}

          <div
            className="
              flex
              min-w-0
              flex-col

              gap-4

              sm:flex-row
              sm:items-end
              sm:gap-6
            "
          >
            {/* Avatar */}

            <div
              className="
                shrink-0

                w-fit

                rounded-full

                border
                border-white/20

                bg-black/30

                p-1.5

                sm:p-2
              "
            >
              <Avatar
                name={user.name}
                image={user.avatar}
                size="large"
              />
            </div>

            {/* Name / Badges */}

            <div
              className="
                min-w-0
                pb-0

                sm:pb-3
              "
            >
              <h1
                className="
                  break-words

                  text-2xl
                  font-bold
                  leading-tight

                  sm:text-3xl

                  xl:text-4xl
                "
              >
                {user.name}
              </h1>

              <p
                className="
                  mt-1
                  font-medium
                  text-cyan-300
                "
              >
                @{user.username}
              </p>

              <div
                className="
                  mt-3

                  flex
                  flex-wrap

                  gap-2

                  sm:mt-4
                  sm:gap-3
                "
              >
                <Badge variant="violet">
                  Founder
                </Badge>

                <Badge variant="green">
                  Researcher
                </Badge>

                <Badge>
                  Open Source
                </Badge>
              </div>
            </div>
          </div>

          {/* Edit Button */}

          <div
            className="
              shrink-0
              pb-0

              sm:pb-3
            "
          >
            <Button>
              <span
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <FaEdit />

                Edit Profile
              </span>
            </Button>
          </div>
        </div>

        {/* Statement */}

        <p
          className="
            mt-7

            max-w-4xl

            leading-7

            opacity-80

            sm:mt-8

            xl:mt-10
            xl:leading-8
          "
        >
          {user.profileStatement}
        </p>

        {/* Contact + Stats */}

        <div
          className="
            mt-7

            grid

            gap-5

            xl:grid-cols-2

            sm:mt-8
            sm:gap-6

            xl:mt-10
            xl:gap-8
          "
        >
          {/* Contact */}

          <div
            className="
              min-w-0
              space-y-3

              sm:space-y-4
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
                break-words
                opacity-80
              "
            >
              <FaMapMarkerAlt
                className="
                  shrink-0
                  text-cyan-400
                "
              />

              <span className="break-words">
                {user.location}
              </span>
            </div>

            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
                break-all
                opacity-80
              "
            >
              <FaEnvelope
                className="
                  shrink-0
                  text-cyan-400
                "
              />

              <span className="break-all">
                {user.email}
              </span>
            </div>

            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
                break-all
                opacity-80
              "
            >
              <FaGlobe
                className="
                  shrink-0
                  text-cyan-400
                "
              />

              <span className="break-all">
                {user.website}
              </span>
            </div>
          </div>

          {/* Stats */}

          <div
            className="
              grid
              grid-cols-2

              gap-3

              sm:grid-cols-2
              xl:grid-cols-4

              sm:gap-4
            "
          >
            <Stat
              icon={<FaProjectDiagram />}
              value={user.statistics.projects}
              label="Projects"
            />

            <Stat
              icon={<FaBook />}
              value={user.statistics.publications}
              label="Publications"
            />

            <Stat
              icon={<FaUsers />}
              value={user.statistics.organizations}
              label="Organizations"
            />

            <Stat
              icon={<FaCode />}
              value={user.statistics.contributions}
              label="Connections"
            />
          </div>
        </div>

        {/* Research Interests */}

        <div
          className="
            mt-7

            sm:mt-8

            xl:mt-10
          "
        >
          <p
            className="
              mb-3

              text-xs
              font-semibold
              uppercase

              tracking-[0.2em]

              opacity-60

              sm:mb-4
              sm:tracking-[0.25em]
            "
          >
            Research Interests
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-2

              sm:gap-3
            "
          >
            {user.researchInterests.map((item) => (
              <EntityChip
                key={item}
                variant="research"
              >
                {item}
              </EntityChip>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function Stat({
  icon,
  value,
  label,
}) {
  return (
    <div
      className="
        min-w-0

        rounded-2xl

        border
        border-white/10

        bg-white/[0.03]

        p-3

        text-center

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-cyan-400/30

        hover:shadow-[0_0_25px_rgba(34,211,238,.15)]

        sm:p-4
      "
    >
      <div
        className="
          mb-2

          flex
          justify-center

          text-lg
          text-cyan-400

          sm:text-xl
        "
      >
        {icon}
      </div>

      <p
        className="
          text-xl
          font-bold

          sm:text-2xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1

          text-[10px]

          uppercase
          tracking-wider

          opacity-60

          sm:text-xs
        "
      >
        {label}
      </p>
    </div>
  );
}

export { ProfileHeader };

export default ProfileHeader;

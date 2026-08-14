import users from "../../../mock/users/users";
import education from "../../../mock/education/education";

import PeriodDisplay from "../../../shared/components/PeriodDisplay";
import EntityChip from "../../../shared/components/EntityChip";
import StatusBadge from "../../../shared/components/StatusBadge";

export default function EducationSection() {
  const user = users[0];

  if (!user) {
    return null;
  }

  const userEducation = education.filter((item) =>
    user.educationIds.includes(item.id)
  );

  return (
    <section className="py-20 select-none">

      {/* Header */}
      <div className="mb-8">

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-cyan-400
          "
        >
          Academic Background
        </p>

        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          Education
        </h2>

      </div>

      {/* Education Cards */}
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
        "
      >

        {userEducation.map((item) => (

          <article
            key={item.id}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:border-[#B08968]/50
              hover:shadow-[0_0_30px_rgba(176,137,104,.12)]
            "
          >

            {/* Header */}
            <div
              className="
                flex
                items-start
                justify-between
                gap-5
              "
            >

              <div className="min-w-0">

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {item.institution}
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    opacity-70
                  "
                >
                  {item.degree}
                </p>

              </div>

              <StatusBadge
                variant={
                  item.status === "Completed"
                    ? "success"
                    : "progress"
                }
              >
                {item.status}
              </StatusBadge>

            </div>

            {/* Field*/}
            <div className="mt-4">
              <EntityChip variant="research">
                {item.field}
              </EntityChip>
            </div>

            {/* Divider */}
            <div
              className="
                my-6
                h-px
                bg-white/10
              "
            />

            {/* Period */}
            <div>
                <PeriodDisplay
                  start={item.startYear}
                  end={item.endYear}
                />
              
          

              

            </div>

            {/* Description */}
            <p
              className="
                mt-6
                text-sm
                leading-relaxed
                opacity-60
              "
            >
              Academic qualification and specialization record.
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}
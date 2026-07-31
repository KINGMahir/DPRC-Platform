import users from "../../../mock/users";

export default function SkillsCard() {

  const user = users[0];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Skills
      </h2>


      <div className="flex flex-wrap gap-3">

        {user.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}
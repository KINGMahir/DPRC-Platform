const projects = [
  {
    id: "PRJ-000001",

    title: "DPRC Platform",

    status: "In Progress",

    description:
      "Engineering research platform for collaboration, knowledge management and innovation.",

    technologies: [
      {
        id: "TEC-000001",
        name: "React",
      },
      {
        id: "TEC-000002",
        name: "Node.js",
      },
      {
        id: "TEC-000003",
        name: "PostgreSQL",
      },
    ],

    organization: {
      id: "ORG-000001",
      name: "DPRC",
    },

    researchAreas: [
      {
        id: "RES-000001",
        name: "Knowledge Graph",
      },
      {
        id: "RES-000002",
        name: "Engineering Education",
      },
    ],
  },

  {
    id: "PRJ-000002",

    title: "Research Hub",

    status: "Planning",

    description:
      "Collaborative research ecosystem connecting students, faculty and industry.",

    technologies: [
      {
        id: "TEC-000001",
        name: "React",
      },
      {
        id: "TEC-000004",
        name: "Express",
      },
    ],

    organization: {
      id: "ORG-000001",
      name: "DPRC",
    },

    researchAreas: [
      {
        id: "RES-000003",
        name: "Research Management",
      },
    ],
  },
];

export default projects;
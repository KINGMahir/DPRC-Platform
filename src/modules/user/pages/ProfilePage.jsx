import {
  AboutSection,
  SkillsSection,
  EducationSection,
  ExperienceSection,
  AchievementsSection,
  ProjectsSection,
  OrganizationsSection,
  PublicationsSection,
} from "../";


import EntityPage from "../../../shared/entity/EntityPage";
import EntityTimeline from "../../../shared/entity/EntityTimeline";


export default function ProfilePage() {

  const userEntity = {

    id: "USR-000001",

    type: "user",

    title: "Mahir Azad Aurnob",

    subtitle: "Engineering Researcher",

    description:
      "Personal profile, engineering background, research interests and contributions.",


    badges: [
      "Electrical Engineering",
      "Research",
      "Innovation"
    ],


    stats: [

      {
        label: "Projects",
        value: "12",
        description: "Engineering projects"
      },

      {
        label: "Publications",
        value: "5",
        description: "Research outputs"
      },

      {
        label: "Skills",
        value: "24",
        description: "Technical skills"
      },

      {
        label: "Connections",
        value: "150",
        description: "Research network"
      }

    ],


    relationships: [

      {
        id: 1,
        name: "Electrical Engineering"
      },

      {
        id: 2,
        name: "Arduino"
      },

      {
        id: 3,
        name: "Renewable Energy"
      },

      {
        id: 4,
        name: "DPRC"
      }

    ],


    timeline: [

      {
        id: 1,
        date: "2024",
        title: "Electrical Engineering Education",
        description:
          "Started engineering journey and technical development."
      },

      {
        id: 2,
        date: "2025",
        title: "Arduino and Embedded Projects",
        description:
          "Developed hardware and automation projects."
      },

      {
        id: 3,
        date: "2026",
        title: "Research Platform Development",
        description:
          "Building DPRC engineering ecosystem."
      }

    ],

  };


  return (

    <EntityPage

      entity={userEntity}


      sections={

        <>

          <AboutSection />


          <div className="space-y-6">

            <SkillsSection />

            <EducationSection />

          </div>


          <ExperienceSection />


          <AchievementsSection />


          <ProjectsSection />


          <OrganizationsSection />


          <PublicationsSection />

        </>

      }


      timeline={
        <EntityTimeline
          items={userEntity.timeline}
        />
      }


    />

  );

}
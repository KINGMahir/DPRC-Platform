import {
  ProfileHeader,
  AboutCard,
  SkillsCard,
  EducationCard,
  ExperienceCard,
  AchievementsCard,
  ProjectsCard,
  OrganizationsCard,
  PublicationsCard,
  ActivityTimeline,
} from "../";

import Container from "../../../shared/layout/Container";
import PageHeader from "../../../shared/layout/PageHeader";


export default function ProfilePage() {

  return (

    <Container>


      <PageHeader
        title="Profile"
        description="
          Personal profile, engineering background,
          research interests and contributions.
        "
      />



      <div className="space-y-8">


        <ProfileHeader />


        <AboutCard />



        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          <SkillsCard />

          <EducationCard />

        </div>



        <ExperienceCard />


        <AchievementsCard />


        <ProjectsCard />


        <OrganizationsCard />


        <PublicationsCard />


        <ActivityTimeline />


      </div>


    </Container>

  );

}
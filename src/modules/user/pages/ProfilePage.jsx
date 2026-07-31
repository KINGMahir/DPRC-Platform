import ProfileHeader from "../components/ProfileHeader";
import AboutCard from "../components/AboutCard";
import SkillsCard from "../components/SkillsCard";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import AchievementsCard from "../components/AchievementsCard";
import ProjectsCard from "../components/ProjectsCard";
import OrganizationsCard from "../components/OrganizationsCard";
import PublicationsCard from "../components/PublicationsCard";
import ActivityTimeline from "../components/ActivityTimeline";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <ProfileHeader />
      <AboutCard />

      <div className="grid lg:grid-cols-2 gap-6">
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
  );
}
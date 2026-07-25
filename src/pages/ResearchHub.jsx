import ProjectsSection from "../sections/ProjectsSection.jsx";
import TeamSection from "../sections/TeamSection.jsx";
import PublicationsSection from "../sections/PublicationsSection.jsx";
import EventsSection from "../sections/EventsSection.jsx";

export default function ResearchHub() {
  return (
    <div className="space-y-16 md:space-y-24 px-4 md:px-6">
      <ProjectsSection />
      <TeamSection />
      <PublicationsSection />
      <EventsSection />
    </div>
  );
}

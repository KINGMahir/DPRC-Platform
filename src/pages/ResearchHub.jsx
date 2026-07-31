import ResearchHero from "../sections/research/ResearchHero";
import SearchResearch from "../sections/research/SearchResearch";
import ResearchCategories from "../sections/research/ResearchCategories";
import FeaturedProjects from "../sections/research/FeaturedProjects";
import RecentPublications from "../sections/research/RecentPublications";
import ResearchStats from "../sections/research/ResearchStats";

export default function ResearchHub() {
  return (
    <>
      <ResearchHero />
      <SearchResearch />
      <ResearchCategories />
      <FeaturedProjects />
      <RecentPublications />
      <ResearchStats />
    </>
  );
}

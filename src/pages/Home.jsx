import Hero from "../sections/home/Hero";
import AboutSection from "../sections/home/AboutSection";
import FeaturesSection from "../sections/home/FeaturesSection";
import StatisticsSection from "../sections/home/StatisticsSection";
import LatestResearchSection from "../sections/home/LatestResearchSection";
import EventsSection from "../sections/home/EventsSection";
import JoinSection from "../sections/home/JoinSection";
import Footer from "../sections/home/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <StatisticsSection />
      <LatestResearchSection />
      <EventsSection />
      <JoinSection />
      <Footer />
    </>
  );
}

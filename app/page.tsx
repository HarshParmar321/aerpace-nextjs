import StockTicker from './components/StockTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceBanner from './components/ExperienceBanner';
import FeatureCardSection from './components/ExperienceBanner';
import ExperienceGrid from './components/ExperienceGrid';
import FeatureSlider from './components/FeatureSlider';
import Afterslider from './components/Afterslider';
import NewSection from './components/NewSection';
import TeamEffortSection from './components/TeamEffortSection';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <StockTicker />
      <Navbar />
      <HeroSection />
      <ExperienceBanner />
      <ExperienceGrid />
      <FeatureSlider />
      <Afterslider />
      <NewSection />
      <TeamEffortSection />
      <Footer />
    </>
  );
}

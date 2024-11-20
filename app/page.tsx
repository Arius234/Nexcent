import Header from '../app/components/header';
import HeroSection from './components/herosection';
import OurClients from './components/ourclients';
import CommunityAndFeaturesSection from './components/communitysection';
import ExperienceSection from './components/experiencesection';
import BusinessReinventionSection from './components/businessreinventionsection';
import ExperienceSection2 from './components/experiencesection2';
import SectionWithTextAndImages from './components/sectionwithtextandimages';
import CaringSection from './components/caringsection';
import DemoSection from './components/prefooter';
import Footer from './components/footer';


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurClients />
      <CommunityAndFeaturesSection />
      <ExperienceSection />
      <BusinessReinventionSection />
      <ExperienceSection2 />
      <SectionWithTextAndImages />
      <CaringSection /><br /><br /><br /><br /><br />
      <DemoSection />
      <Footer />
    </div>
  );
}

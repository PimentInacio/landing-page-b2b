import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import TheOpportunity from './components/TheOpportunity';
import EarningsCalculator from './components/EarningsCalculator';
import AffiliatePortal from './components/AffiliatePortal';
import WhyPartner from './components/WhyPartner';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SocialProof />
      <TheOpportunity />
      <EarningsCalculator />
      <AffiliatePortal />
      <WhyPartner />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;
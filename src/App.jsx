import { useState } from 'react';
import HeroSection from './components/HeroSection';
import TheOpportunity from './components/TheOpportunity';
import AffiliatePortal from './components/AffiliatePortal';
import WhyPartner from './components/WhyPartner';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LeadFormModal from './components/LeadFormModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      
      <TheOpportunity />
      
      <AffiliatePortal />

      <WhyPartner />

      <FinalCTA onOpenModal={() => setIsModalOpen(true)} />

      <Footer />

      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}

export default App;
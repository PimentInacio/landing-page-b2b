import { useState } from 'react';
import HeroSection from './components/HeroSection';
import TheOpportunity from './components/TheOpportunity';
import AffiliatePortal from './components/AffiliatePortal'; // <-- Importe aqui
import LeadFormModal from './components/LeadFormModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      
      <TheOpportunity />
      
      <AffiliatePortal /> {/* <-- Adicione aqui */}

      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}

export default App;
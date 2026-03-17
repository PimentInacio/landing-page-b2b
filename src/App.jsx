import { useState } from 'react';
import HeroSection from './components/HeroSection';
import LeadFormModal from './components/LeadFormModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      
      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}

export default App;
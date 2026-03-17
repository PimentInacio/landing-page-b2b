import { CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenModal }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">NOVO PROGRAMA DE PARCEIROS B2B</span>
        
        <h1>
          Fature até <span className="highlight">30% de comissão</span> vendendo eSIM Internacional.
        </h1>
        
        <p>
          Agências de viagens, seguradoras e empresas de turismo: parem de deixar dinheiro na mesa. 
          Monetize sua base atual de clientes oferecendo conectividade digital instantânea. 
          Você indica, fatura alto e nossa equipe cuida de todo o resto. Nossa responsabilidade o atendimento do cliente desde as dúvidas no atendimento até o suporte pós-venda.
        </p>
        
        <button className="btn-cta" onClick={onOpenModal}>
          Quero me afiliar e lucrar agora
        </button>

        <div className="hero-benefits">
          <span><CheckCircle2 size={18} color="#10B981"/> Custo zero de adesão</span>
          <span><CheckCircle2 size={18} color="#10B981"/> Portal de gestão em tempo real</span>
          <span><CheckCircle2 size={18} color="#10B981"/> Suporte Nível 1 via IA (NivIA)</span>
        </div>
      </div>
    </section>
  );
}
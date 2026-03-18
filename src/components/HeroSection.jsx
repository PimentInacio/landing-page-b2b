import { CheckCircle2 } from 'lucide-react';

export default function HeroSection() { // Removida a prop onOpenModal
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">NOVO PROGRAMA DE PARCEIROS B2B</span>
        
        <h1>
          Fature até <span className="highlight">30% de comissão</span> vendendo eSIM Internacional.
        </h1>
        
        <p>
          Pare de deixar dinheiro na mesa! 
          Monetize sua base atual de clientes oferecendo conectividade digital instantânea. 
          Você indica para seu cliente comprar nosso eSIM, fatura alto com comissões e nossa equipe cuida de todo o resto. Temos responsabilidade com todo o atendimento do cliente desde as dúvidas no atendimento até o suporte pós-venda.
        </p>
        
        {/* Trocado de <button> para <a> com seu link */}
        <a 
          href="https://partners.esims.com.br/auth/signup" 
          className="btn-cta"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Quero me afiliar e lucrar agora
        </a>

        <div className="hero-benefits">
          <span><CheckCircle2 size={18} color="#10B981"/> Custo zero de adesão</span>
          <span><CheckCircle2 size={18} color="#10B981"/> Portal de gestão em tempo real</span>
          <span><CheckCircle2 size={18} color="#10B981"/> Suporte Nível 1 via IA (NivIA)</span>
        </div>
      </div>
    </section>
  );
}
import { CircleDollarSign, TrendingUp, Headset, Gift } from 'lucide-react';

export default function WhyPartner() {
  const verticals = [
    "Agências de Viagens",
    "Influenciadores",
    "Corretoras de Seguro",
    "Companhias Aéreas",
    "Casas de Câmbio",
    "Setor de Hospitalidade"
  ];

  return (
    <>
      <section className="benefits-section">
        <h2 className="section-title">Por que ser um parceiro eSIM's?</h2>
        <div className="benefits-grid">
          
          <div className="benefit-card">
            <h4><CircleDollarSign size={20} color="#512292" /> Investimento Zero</h4>
            <p>Sem taxas, sem pegadinhas e sem custos iniciais. Sua rentabilidade é imediata desde o primeiro link compartilhado.</p>
          </div>

          <div className="benefit-card">
            <h4><TrendingUp size={20} color="#512292" /> Aumento de Ticket Médio</h4>
            <p>Fature mais por cada cliente já atendido na sua base, adicionando um serviço essencial à jornada dele.</p>
          </div>

          <div className="benefit-card">
            <h4><Headset size={20} color="#512292" /> Apoio Técnico</h4>
            <p>Sua equipe apenas vende. A NivIA (nossa IA de atendimento e suporte ao cliente) e nossa equipe de especialistas assumem 100% do suporte técnico 24/7.</p>
          </div>

          <div className="benefit-card">
            <h4><Gift size={20} color="#512292" /> Valor Agregado</h4>
            <p>Ofereça mimos exclusivos para seus clientes, como acesso ao Clube eSIMs de Benefícios em Aeroportos.</p>
          </div>

        </div>
      </section>

      <section className="audience-section">
        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '40px' }}>
          Soluções criadas para o seu modelo de negócio
        </h2>
        <div className="audience-tags">
          {verticals.map((item, index) => (
            <span key={index} className="audience-tag">{item}</span>
          ))}
        </div>
      </section>
    </>
  );
}
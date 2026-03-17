import { BarChart3, SlidersHorizontal, Ticket, BadgeDollarSign } from 'lucide-react';

export default function AffiliatePortal() {
  return (
    <section className="portal-section">
      <div className="portal-container">
        
        <div className="portal-header">
          <h2>O centro de comando dos seus lucros</h2>
          <p>
            Esqueça planilhas confusas. Nosso Novo Portal do Parceiro entrega controle total, 
            em tempo real, sobre suas vendas, links gerados e comissões a receber.
          </p>
        </div>

        <div className="portal-grid">
          
          {/* Card 1: Dashboard e PIX (Aqui entra sua copy genial) */}
          <div className="portal-card">
            <div className="portal-icon">
              <BarChart3 size={32} />
            </div>
            <h3>Transparência Total</h3>
            <p>
              Acompanhe volume de visitas, taxa de conversão e vendas aprovadas no exato momento em que acontecem. 
              As vendas caem direto no seu dashboard individual.
            </p>
            <div className="pix-highlight">
              <BadgeDollarSign size={22} />
              <span>Fechou o mês? Sua comissão é transferida via PIX.</span>
            </div>
          </div>

          {/* Card 2: A Regra dos 30% */}
          <div className="portal-card">
            <div className="portal-icon">
              <SlidersHorizontal size={32} />
            </div>
            <h3>A Regra dos 30%</h3>
            <p>
              Flexibilidade inédita. Você tem <strong>30% de margem total</strong> e decide como usar: 
              dê mais desconto ao cliente para ser agressivo na venda ou aumente sua comissão para maximizar seu lucro.
            </p>
          </div>

          {/* Card 3: Ferramentas de Conversão */}
          <div className="portal-card">
            <div className="portal-icon">
              <Ticket size={32} />
            </div>
            <h3>Liberdade Total para Sua Estratégia</h3>
            <p>
              Crie links rastreáveis direcionados para planos específicos (ex: Link rastreado para plano Europa 10gb). Crie também cupons personalizados com sua marca para campanhas de marketing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
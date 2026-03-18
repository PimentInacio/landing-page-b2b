import { BarChart3, SlidersHorizontal, Ticket, BadgeDollarSign } from 'lucide-react';

// === IMPORTANTE ===
// Para usar sua imagem real, salve-a na pasta 'src/assets' com o nome 'real-dashboard.png' (ou .jpg).
// Depois, descomente a linha abaixo e use a variável 'DashboardImg' na tag <img>.
import DashboardImg from '../assets/real-dashboard.png';

export default function AffiliatePortal() {
  return (
    <section className="portal-section">
      <div className="portal-container">
        
        <div className="portal-header">
          <h2>O centro de comando dos seus lucros</h2>
          <p>
            Esqueça planilhas confusas. Nosso Novo Portal do Parceiro entrega controle total, 
            em tempo real, sobre suas vendas, número de clicks no seu link, taxa de conversão e comissões a receber.
          </p>
        </div>

        <div className="portal-layout-enterprise">
          
          {/* Lado Esquerdo: Os Cards (O Volante) */}
          <div className="portal-cards-column">
            <div className="portal-card">
              <div className="portal-icon">
                <BarChart3 size={28} />
              </div>
              <h3>Transparência Total</h3>
              <p>
                Acompanhe volume de visitas, taxa de conversão e vendas aprovadas no exato momento em que acontecem. 
              </p>
              <div className="pix-highlight">
                <BadgeDollarSign size={20} />
                <span>Fechou o mês? Comissão transferida via PIX.</span>
              </div>
            </div>

            <div className="portal-card">
              <div className="portal-icon">
                <SlidersHorizontal size={28} />
              </div>
              <h3>A Regra dos 30%</h3>
              <p>
                Flexibilidade inédita. Você tem <strong>30% de margem total</strong> e decide como usar: 
                dê mais desconto ao cliente para ser agressivo ou aumente sua comissão.
              </p>
            </div>

            <div className="portal-card">
              <div className="portal-icon">
                <Ticket size={28} />
              </div>
              <h3>Liberdade de Estratégia</h3>
              <p>
                Crie links rastreáveis direcionados para planos específicos (ex: Europa 10gb). Crie também cupons personalizados com sua marca.
              </p>
            </div>
          </div>

          {/* Lado Direito: O Mockup Visual do Dashboard em 3D Premium */}
          <div className="portal-mockup-column">
            <div className="laptop-3d-container">
              <div className="laptop-3d">
                
                {/* Tampa do Notebook e Tela */}
                <div className="laptop-screen-3d">
                  <div className="laptop-camera"></div>
                  <img 
                    src={DashboardImg} 
                    alt="Painel Financeiro eSIMs Partner" 
                    className="dashboard-img-3d"
                  />
                </div>
                
                {/* Base, Teclado e Touchpad */}
                <div className="laptop-keyboard-3d">
                   <div className="laptop-keys"></div>
                   <div className="laptop-touchpad"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
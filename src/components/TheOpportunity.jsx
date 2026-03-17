import { Frown, Sparkles } from 'lucide-react';

export default function TheOpportunity() {
  return (
    <>
      <section className="story-section">
        <div className="story-container">
          
          <div className="story-header">
            <h2>A viagem perfeita tem um ponto cego.</h2>
            <p className="story-subtitle">
              Você vende passagens, hotéis e roteiros incríveis. 
              Mas e quando seu cliente sai do aeroporto no exterior e fica sem internet?
            </p>
          </div>

          <div className="story-flow">
            {/* O Problema */}
            <div className="story-card">
              <div className="icon-circle" style={{ backgroundColor: '#FEE2E2', color: '#EF4444' }}>
                <Frown size={32} />
              </div>
              <h3>A frustração na chegada</h3>
              <p>
                Depender de Wi-Fi público ou enfrentar filas de horas para comprar 
                um chip físico pagando até <strong>3x mais caro</strong> no balcão. 
                Dinheiro que poderia ser da sua agência indo para terceiros.
              </p>
            </div>

            {/* A Solução (Visual eSIMs Oficial) */}
            <div className="story-card">
              <div className="icon-circle">
                <Sparkles size={32} />
              </div>
              <h3>A virada de chave</h3>
              <p>
                Ao fechar um pacote, você envia ao cliente o seu <strong>link exclusivo</strong>. 
                Ele compra um eSIM 100% digital. Assim que o avião pousar, basta ativar e sair conectado. Sem filas, sem estresse.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Banner de Impacto (Inspirado no print do site oficial) */}
      <section style={{ backgroundColor: '#F9F5FF', paddingBottom: '60px' }}>
        <div className="impact-banner">
          <div className="impact-item">
            <h3>150+</h3>
            <p>Países cobertos</p>
          </div>
          <div className="impact-item">
            <h3>24/7</h3>
            <p>Nossa equipe cuida de todo suporte e atendimento ao cliente</p>
          </div>
          <div className="impact-item">
            <h3>100%</h3>
            <p>Garantia de qualidade</p>
          </div>
        </div>
      </section>
    </>
  );
}
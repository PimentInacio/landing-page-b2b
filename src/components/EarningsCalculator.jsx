import { useState } from 'react';

export default function EarningsCalculator() {
  // Estado para armazenar o número de clientes
  const [clients, setClients] = useState(50);
  
  // Cálculo: Ticket Médio estimado R$ 200. Comissão 30% = R$ 60 por cliente.
  const commissionPerClient = 60; 
  const totalEarnings = clients * commissionPerClient;

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <div className="calculator-text">
          <h2>Simule seus lucros</h2>
          <p>
            Descubra quanto dinheiro sua agência está deixando na mesa. 
            Calcule sua receita extra mensal considerando nossa <strong>margem de 30%</strong>.
          </p>
        </div>

        <div className="calculator-box">
          <div className="calc-header">
            <span>Se eu vender para</span>
            <span className="calc-clients">{clients} clientes/mês</span>
          </div>
          
          <input 
            type="range" 
            min="10" 
            max="500" 
            step="10" 
            value={clients} 
            onChange={(e) => setClients(e.target.value)}
            className="calc-slider"
          />
          
          <div className="calc-result">
            <span>Meu lucro líquido será de:</span>
            <h3>
              {totalEarnings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </h3>
          </div>
          
          <a href="https://partners.esims.com.br/auth/signup" className="btn-cta calc-btn">
            Garantir minha margem agora
          </a>
        </div>
      </div>
    </section>
  );
}
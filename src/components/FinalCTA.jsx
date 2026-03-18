export default function FinalCTA() { // Removida a prop onOpenModal
  return (
    <section className="final-cta">
      <h2>O futuro da conectividade B2B começou.</h2>
      <p>
        Junte-se às empresas que já estão monetizando a conectividade internacional 
        e pararam de deixar dinheiro na mesa.
      </p>
      
      {/* Trocado de <button> para <a> com seu link */}
      <a 
        href="https://partners.esims.com.br/auth/signup" 
        className="btn-cta"
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        Quero me afiliar e lucrar agora
      </a>
    </section>
  );
}
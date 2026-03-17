export default function FinalCTA({ onOpenModal }) {
  return (
    <section className="final-cta">
      <h2>O futuro da conectividade B2B começou.</h2>
      <p>
        Junte-se às empresas que já estão monetizando a conectividade internacional 
        e pararam de deixar dinheiro na mesa.
      </p>
      <button className="btn-cta" onClick={onOpenModal}>
        Quero me afiliar e lucrar agora
      </button>
    </section>
  );
}
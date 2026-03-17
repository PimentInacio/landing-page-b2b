export default function HeroSection({ onOpenModal }) {
  return (
    <section className="hero-section">
      <h1>Somos inquietos, digitais & inovadores.</h1>
      <p>A conectividade agora é questão de segurança.</p>
      <button className="btn-primary" onClick={onOpenModal}>
        Seja um parceiro agora
      </button>
    </section>
  );
}
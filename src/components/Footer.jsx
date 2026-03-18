export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3 style={{fontFamily: 'Montserrat', fontWeight: 900}}>eSIM's</h3>
          <p>
            Somos inquietos, digitais & inovadores. <br/>
            A conectividade de alta performance para o viajante moderno.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} eSIMs. Todos os direitos reservados.</span>
        <span>Feito com 💜 no Brasil</span>
      </div>
    </footer>
  );
}
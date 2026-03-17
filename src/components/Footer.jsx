export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3 style={{fontFamily: 'Montserrat', fontWeight: 900}}>eSIM's</h3>
          <p>
            Somos inquietos, digitais & inovadores. 
            A conectividade de alta performance para o viajante moderno.
          </p>
        </div>

        <div className="footer-links">
          <h4>Plataforma</h4>
          <ul>
            <li><a href="#">Portal do Parceiro</a></li>
            <li><a href="#">Área do Cliente</a></li>
            <li><a href="#">Central de Ajuda</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Política de Cookies</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} eSIM's Traveltech. Todos os direitos reservados.</span>
        <span>Feito com 💜 no Brasil</span>
      </div>
    </footer>
  );
}
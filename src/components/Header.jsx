export default function Header() {
  return (
    <header className="header-fixed">
      <div className="header-container">
        <div className="header-logo">
          eSIM's <span>Parceiros</span>
        </div>
        <div className="header-action">
          <a 
            href="https://partners.esims.com.br/auth/signup" 
            className="btn-header"
          >
            Seja um Parceiro
          </a>
        </div>
      </div>
    </header>
  );
}
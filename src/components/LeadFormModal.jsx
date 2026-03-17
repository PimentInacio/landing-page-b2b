import { User, Mail, Phone, Building2, X } from 'lucide-react';

export default function LeadFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
          <h2>Cadastro de Parceiro</h2>
          <p>Preencha o formulário para iniciar sua parceria com a eSIM's</p>
        </div>

        <form className="modal-body" onSubmit={(e) => e.preventDefault()}>
          
          <div className="form-group">
            <label>Nome completo</label>
            <div className="input-wrapper">
              <User size={18} className="input-icon" />
              <input type="text" className="form-input" placeholder="Seu nome completo" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input type="email" className="form-input" placeholder="seu@email.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <div className="input-wrapper">
                <Phone size={18} className="input-icon" />
                <input type="tel" className="form-input" placeholder="(00) 00000-0000" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Empresa</label>
            <div className="input-wrapper">
              <Building2 size={18} className="input-icon" />
              <input type="text" className="form-input" placeholder="Nome da sua empresa" />
            </div>
          </div>

          <div className="form-group">
            <label>Tipo de parceria</label>
            <select className="form-input">
              <option value="">Selecione o tipo de parceria</option>
              <option value="agencia">Agência de Viagens</option>
              <option value="influenciador">Influenciador</option>
              <option value="corretora">Corretora/Seguradora</option>
              <option value="hospitalidade">Setor de Hospitalidade</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Eu concordo com os <a href="#">termos de uso</a> e <a href="#">política de privacidade</a> da eSIM's.
            </label>
          </div>

          <button type="submit" className="btn-primary btn-full">
            Enviar cadastro
          </button>
        </form>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { User, Mail, Phone, Building2, X, Lock, MapPin, FileText } from 'lucide-react';

export default function LeadFormModal({ isOpen, onClose }) {
  // Estado para armazenar exatamente a estrutura do seu JSON
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cnpj: '',
    company: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  });

  if (!isOpen) return null;

  // Função genérica para atualizar os campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função de envio (pronta para plugar no seu endpoint)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("JSON pronto para enviar para a API:", JSON.stringify(formData, null, 2));
    // Futuro fetch/axios vai aqui
  };

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

        {/* Adicionado max-height e overflow para o formulário longo não quebrar a tela */}
        <form 
          className="modal-body" 
          onSubmit={handleSubmit}
          style={{ maxHeight: '70vh', overflowY: 'auto' }}
        >
          
          <div className="form-group">
            <label>Nome completo</label>
            <div className="input-wrapper">
              <User size={18} className="input-icon" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="João Silva" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="joao@empresa.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <div className="input-wrapper">
                <Phone size={18} className="input-icon" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="5511998765432" required />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Senha de acesso</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" placeholder="Sua senha segura" required />
              </div>
            </div>
            <div className="form-group">
              <label>CNPJ</label>
              <div className="input-wrapper">
                <FileText size={18} className="input-icon" />
                <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} className="form-input" placeholder="Apenas números" required />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Razão Social / Empresa</label>
            <div className="input-wrapper">
              <Building2 size={18} className="input-icon" />
              <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="Acme Telecom LTDA" required />
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '10px 0' }} />

          <div className="form-row">
            <div className="form-group">
              <label>CEP</label>
              <div className="input-wrapper">
                <MapPin size={18} className="input-icon" />
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="form-input" placeholder="01513000" required />
              </div>
            </div>
            <div className="form-group">
              <label>Estado (UF)</label>
              <select name="state" value={formData.state} onChange={handleChange} className="form-input" required>
                <option value="">Selecione...</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                {/* Adicione outros estados conforme necessário */}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{ flex: 2 }}>
              <label>Cidade</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" style={{ paddingLeft: '12px' }} placeholder="São Paulo" required />
            </div>
            <div className="form-group" style={{ flex: 2 }}>
              <label>Bairro</label>
              <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} className="form-input" style={{ paddingLeft: '12px' }} placeholder="Bela Vista" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{ flex: 3 }}>
              <label>Logradouro (Rua)</label>
              <input type="text" name="street" value={formData.street} onChange={handleChange} className="form-input" style={{ paddingLeft: '12px' }} placeholder="Rua Jaceguai" required />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Número</label>
              <input type="text" name="number" value={formData.number} onChange={handleChange} className="form-input" style={{ paddingLeft: '12px' }} placeholder="425" required />
            </div>
          </div>

          <div className="form-group">
            <label>Complemento</label>
            <input type="text" name="complement" value={formData.complement} onChange={handleChange} className="form-input" style={{ paddingLeft: '12px' }} placeholder="Sala, Andar, Bloco (Opcional)" />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
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
//import bannerContato from '../assets/img/'
import { useState } from 'react'
import bannerContato from '../public/img/faixa1.jpg'

function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <>
      <div className="banner-container">
        <img src={bannerContato} alt="Banner Contato" className="page-banner" />
      </div>

      <section className="page contato">
        <h1 className="page-title">Entre em Contato</h1>

              <div className="contato-container">
                <div className='textoC'>
        <div>
          <h2>📍 Visite-nos</h2>
          <p><strong>R. Mais Mais, 555</strong><br/>Centro, Campinas - SP</p>
          <p><strong>🕒 Segunda-Sábado</strong><br/>10h às 20h</p>
         
          <h2>📞 Informações</h2>
          <p><strong>Telefone:</strong> (19) 9999-9999</p>
          <p><strong>Email:</strong> gdayss@gmail.com.br</p>
          <p><strong>WhatsApp:</strong> (19) 99999-9999</p>
        </div>
        </div>

          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seuemail@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                rows="6"
              />
            </div>

            <button type="submit" className="form-btn">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contato
//import bannerContato from '../assets/img/'
import bannerContato from "../public/img/faixa1.jpg";

function Contato() {
  return (
       <>
              <div className="banner-container">
                <img src={bannerContato} alt="Banner Contato" className="page-banner" />
              </div>

    <section className="page contato">
      
      <h1 className="page-title">Entre em Contato</h1>
      
      <div className="contato-container">
        <div className="contato-infos">
          <h2>📍 Visite-nos</h2>
          <p><strong>R. Mais Mais, 555</strong><br/>Centro, Campinas - SP</p>
          <p><strong>🕒 Segunda-Sábado</strong><br/>10h às 20h</p>
          
          <h2>📞 Informações</h2>
          <p><strong>Telefone:</strong> (19) 9999-9999</p>
          <p><strong>Email:</strong> gdayss@gmail.com.br</p>
          <p><strong>WhatsApp:</strong> (19) 99999-9999</p>
        </div>


      </div>
    </section>
    </>
  )
}

export default Contato
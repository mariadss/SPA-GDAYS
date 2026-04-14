import bannerSobre from "../public/img/faixa2.jpg";

function Sobre() {
  return (
       <>
              <div className="banner-container">
                <img src={bannerSobre} alt="Banner Sobre" className="page-banner" />
              </div>


    <section className="page sobre">
      
      <h1 className="page-title">Sobre a GDAYS</h1>
      
      <div className="sobre-content">
        <div className="sobre-section">
          <p>
            A GDAYS nasceu do meu amor por música e vontade de compartilhar esse amor. 
            Aqui em Campinas, transformei essa paixão em uma loja especializada 
            em vinis, CDs importados e fitas cassete. Cada peça tem história!
          </p>
        </div>

        <div className="sobre-section">
          <h1> Minhas Recomendações 🎧</h1>
          <ul className="lista">
            <li>Kali Uchis - Breeze</li>
            <li>Malcom Todd - Earings </li>
            <li>Tyler, The Creator - IGOR </li>
            <li>Daniel Caesar - Freudian</li>
            <li>Robert Glasper - Black Radio </li>
          </ul>
        </div>

      <div className="sobre-section">
        <div className="spotify">
          <h1> Minhas Playlists</h1>
          <a href="https://youtube.com/playlist?list=PLkkYJWICDsX1RYpBLyNjYLnsq_8DWStoQ&si=c95jnhrEno4lu_aa" rel="link-spotify" className="link-spotify">
          ‧₊˚♪ 𝄞𝄢₊˚⊹
          </a>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Sobre
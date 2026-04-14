//import bannerExclusivos from '../assets/img/faixa5.jpg'
import CardVinil from '../components/CardVinil'
import { Link } from 'react-router-dom'
import bannerExclusivos from "../public/img/faixa4.jpg";

import img21 from '../public/img/img21.jpg';
import img22 from '../public/img/img22.jpg';
import img23 from '../public/img/img23.jpg';
import img24 from '../public/img/img24.jpg';
import img25 from '../public/img/img25.jpg';
import img26 from '../public/img/img26.jpg';
import img27 from '../public/img/img27.jpg';
import img28 from '../public/img/img28.jpg';

const exclusivos = [
  { id: 21, imagem: img21, titulo: 'D"Angelo Voodoo [PROMO]', descricao: 'Promo white label 2000 RARA', preco: '450', especial: true },
  { id: 22, imagem: img22, titulo: 'Robert Glasper Tokyo 2008', descricao: 'Live Japan EXCLUSIVO', preco: '320', especial: true },
  { id: 23, imagem: img23, titulo: 'Kendrick TPAB [Japanese]', descricao: 'Edição japonesa OBI', preco: '380.80', especial: true },
  { id: 24, imagem: img24, titulo: 'Daniel Caesar [Test Press]', descricao: 'Test pressing FREUDIAN', preco: '650', especial: true },
  { id: 25, imagem: img25, titulo: 'Kamasi Epic [1st Press]', descricao: '1ª prensagem 2015', preco: '520', especial: true },
  { id: 26, imagem: img26, titulo: 'Tyler Flower Boy [Euro]', descricao: 'Tour edition Europe', preco: '290', especial: true },
  { id: 27, imagem: img27, titulo: 'Bad Bunny YHLQMDLG [PIC]', descricao: 'Picture disc leilão', preco: '240.50', especial: true },
  { id: 28, imagem: img28, titulo: 'Hiatus Kaiyote [DEMO]', descricao: 'Demo tape 2013 RARA', preco: '800', especial: true }
]

function Exclusivos() {
  return (
     <>
      <div className="banner-container">
        <img src={bannerExclusivos} alt="Banner Exclusivos" className="page-banner" />
      </div>
    <section className="page exclusivos">
     {/*      <img src={bannerExclusivos} alt="Banner Exclusivos" className="page-banner" />      
 */}
      <h1 className="titulo">
         EXCLUSIVOS & RAROS
      </h1>
      <p className='texto'>
        Itens fora de linha!
      </p>
      
      <section className="cards-grid">
        {exclusivos.map(produto => (
          <CardVinil key={produto.id} {...produto} />
        ))}
      </section>

      <Link to="/produtos" className="btn-ver-mais" style={{background: 'linear-gradient(135deg, #facc15, #eab308)'}}>
        VER PRODUTOS COMUNS
      </Link>
    </section>
    </>
  )
}

export default Exclusivos
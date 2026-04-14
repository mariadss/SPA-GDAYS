import CardVinil from '../components/CardVinil'
import { Link } from 'react-router-dom'

import bannerHome from "../public/img/faixa3.jpg";

import img1 from '../public/img/img1.jpg';
import img2 from '../public/img/img2.jpg';
import img3 from '../public/img/img3.jpg';
import img4 from '../public/img/img4.jpg';
import img5 from '../public/img/img5.jpg';
import img6 from '../public/img/img6.jpg';
import img7 from '../public/img/img7.jpg';
import img8 from '../public/img/img8.jpg';
import img9 from '../public/img/img9.jpg';
import img10 from '../public/img/img10.jpg';
import img11 from '../public/img/img11.jpg';
import img12 from '../public/img/img12.jpg';

const produtosHome = [
  { id: 1, imagem: img1, titulo: 'D"Angelo - Voodoo', descricao: 'RnB clássico 2000, 1° prendagem', preco: '129'},
  { id: 2, imagem: img2, titulo: 'Robert Glasper - Black Radio', descricao: 'Jazz/RnB Grammy 2013', preco: '98' },
  { id: 3, imagem: img3, titulo: 'Kendrick Lamar - DAMN.', descricao: 'Rap Pulitzer 2018, picture disc', preco: '112' },
  { id: 4, imagem: img4, titulo: 'Daniel Caesar - Freudian', descricao: 'RnB 2017, edição limitada', preco: '89.50' },
  { id: 5, imagem: img5, titulo: 'Kamasi Washington - Heaven', descricao: 'Jazz épico 3LP 2018', preco: '145.90' },
  { id: 6, imagem: img6, titulo: 'Tyler, The Creator - IGOR', descricao: 'Rap/RnB 2019, gatefold', preco: '105' },
  { id: 7, imagem: img7, titulo: 'Bad Bunny - Un Verano', descricao: 'Reggaeton 2020, color vinyl', preco: '95' },
  { id: 8, imagem: img8, titulo: 'Hiatus Kaiyote - Tawk', descricao: 'Neo-soul 2015', preco: '88' },
  { id: 9, imagem: img9, titulo: 'Anderson .Paak - Malibu', descricao: 'RnB/Funk 2016', preco: '102' },
  { id: 10, imagem: img10, titulo: 'Thundercat - Drunk', descricao: 'Jazz/Funk 2017', preco: '97' },
  { id: 11, imagem: img11, titulo: 'SZA - Ctrl', descricao: 'RnB 2017, 1ª edição', preco: '110' },
  { id: 12, imagem: img12, titulo: 'Joji - BALLADS 1', descricao: 'Lo-fi/RnB 2018', preco: '85' }
]

function Home() {
  return (
    <>
          <div className="banner-container">
            <img src={bannerHome} alt="Banner Home" className="page-banner" />
          </div>
    <section className="page home">
     {/* <img src= {bannerHome} alt="GDAYS Home" className="page-banner" /> */}
      <div className="home-intro">
        <h1 className="titulo">Bem-vindo à GDAYS</h1>
        <p className="texto">
          A melhor loja de vinis, CDs e fitas cassete de Campinas. Especializada em 
          RnB, Jazz, Rap e soul. <br></br>Clássicos raros e lançamentos quentes te esperam!
        </p>
      </div>

      <section className="cards-grid">
        {produtosHome.map(produto => (
          <CardVinil key={produto.id} {...produto} />
        ))}
      </section>

      <Link to="/produtos" className="btn-ver-mais">
        VER MAIS PRODUTOS
      </Link>
    </section>
    </>
  )
}

export default Home
//import bannerProdutos from '../assets/img/faixa2.jpg'
import CardVinil from '../components/CardVinil'
import { Link } from 'react-router-dom'

import bannerProdutos from "../public/img/faixa5.jpg";


import img13 from '../public/img/img13.jpg';
import img14 from '../public/img/img14.jpg';
import img15 from '../public/img/img15.jpg';
import img16 from '../public/img/img16.jpg';
import img17 from '../public/img/img17.jpg';
import img18 from '../public/img/img18.jpg';
import img19 from '../public/img/img19.jpg';
import img20 from '../public/img/img20.jpg';
const produtos = [
  { id: 13, imagem: img13, titulo: 'Frank Ocean - Blonde', descricao: 'RnB 2016, master tape', preco: '220.90' },
  { id: 14, imagem: img14, titulo: 'Mac Miller - Swimming', descricao: 'Rap 2018, blue vinyl', preco: '115' },
  { id: 15, imagem: img15, titulo: 'Leon Bridges - Coming Home', descricao: 'Soul 2015', preco: '92' },
  { id: 16, imagem: img16, titulo: 'JID - The Forever Story', descricao: 'Rap 2022', preco: '108' },
  { id: 17, imagem: img17, titulo: 'Nao - For All We Know', descricao: 'Neo-soul 2016', preco: '94.50' },
  { id: 18, imagem: img18, titulo: 'Isaiah Rashad - The House', descricao: 'Rap 2021', preco: '99' },
  { id: 19, imagem: img19, titulo: 'Khruangbin - Mordechai', descricao: 'Psychedelic 2020', preco: '87' },
  { id: 20, imagem: img20, titulo: 'Tems - Born in the Wild', descricao: 'Afrobeats/RnB 2024', preco: '105.50' }
]

function Produtos() {
  return (
       <>
              <div className="banner-container">
                <img src={bannerProdutos} alt="Banner Produtos" className="page-banner" />
              </div>

    <section className="page produtos">
     {/* <img src={bannerProdutos} alt="Produtos GDAYS" className="page-banner" /> */}
      <h1 className="titulo">Nossos Produtos</h1>
      <p className="texto">Trazendo os mais atuais e  refinados artigos!</p>
      <section className="cards-grid">
        {produtos.map(produto => (
          <CardVinil key={produto.id} {...produto} />
        ))}
      </section>

      <Link to="/NotFound" className="btn-ver-mais">
        VER MAIS
      </Link>
    </section>
    </>
  )
}

export default Produtos
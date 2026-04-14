import { Link } from 'react-router-dom'
//import banner404 from '../assets/img/faixa1.jpg'

function NotFound() {
  return (
    <section className="page">
      {/* <img src={banner404} alt="404" className="page-banner" /> */}
      
      <div className='error'>
        <h1 className="error-title">404</h1>
        <h2>Página não encontrada</h2>
        <p>Essa página não existe</p>
        <Link to="/" className="error-btn">
          🏠︎ Voltar para Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
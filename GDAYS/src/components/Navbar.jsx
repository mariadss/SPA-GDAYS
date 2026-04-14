import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="nav-left">
        <Link to="/contato" className="nav-link">Contato</Link>
        <Link to="/Sobre" className="nav-link">Sobre</Link>
        </div>
        <Link to="/" className="nav-logo">
          <p className="logo-bold">GDAYS</p>
        </Link>
        <div className="nav-right">
          <Link to="/produtos" className="nav-link">Produtos</Link>
          <Link to="/exclusivos" className="nav-link">Exclusivos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
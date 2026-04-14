function CardVinil({ imagem, titulo, descricao, preco, especial = false }) {
  return (
    <div className={`card-vinil ${especial ? 'card-dourado' : ''}`}>
      <div className="card-imagem-container">
        <img 
          src={imagem} 
          alt={titulo}
          className="card-imagem"
        />
      </div>
      <div className="card-info">
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-descricao">{descricao}</p>
        <p className="card-preco">R$ {preco}</p>
      </div>
    </div>
  )
}

export default CardVinil
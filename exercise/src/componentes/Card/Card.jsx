import './Card.css'

const Card = ({corCard, imagem, nome, cargo}) => {
    return (
        <div className='card'>
            <div style={{backgroundColor: corCard}} className='card_divImagem'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='card_divTexto'>
                <h3>{nome}</h3>
                <p>{cargo}</p>
            </div>
        </div>
    )
}

export default Card
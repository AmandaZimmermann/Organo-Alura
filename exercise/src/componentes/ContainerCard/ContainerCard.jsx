import './ContainerCard.css'
import Card from '../Card/Card'

const ContainerCard = ({ corContainerCard, corCard, titulo, colaboradores}) => {
    return (
        colaboradores.length > 0 && <section style={{backgroundColor: corContainerCard}} className='containerCard'> 
            <h2>{titulo}</h2>
            <div className='containerCard_card'>
                {colaboradores.map(colaborador => <Card key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corCard={corCard}/>)}
            </div>
        </section>
    )
}

export default ContainerCard
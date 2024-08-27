import './CampoTexto.css'

const CampoTexto = ({label, placeholder, valor, aoAlterar}) => {

    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className='campoTexto'>
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} type="text" placeholder={placeholder} required/>
        </div>
    )
}

export default CampoTexto
import './CampoComboBox.css'

const CampoComboBox = ({label, itens, valor, aoAlterar}) => {
    return (
        <div className='campoComboBox'>
            <label>{label}</label>
            <select value={valor} onChange={evento => aoAlterar(evento.target.value)} className='formulario_combobox' name="time" required>
                <option value="Selecione">Selecione</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default CampoComboBox
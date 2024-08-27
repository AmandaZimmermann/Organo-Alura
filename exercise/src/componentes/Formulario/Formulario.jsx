import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import CampoComboBox from '../CampoComboBox/CampoComboBox'
import { useState } from 'react'

const Formulario = ({titulo, aoColaboradorCadastrado, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>{titulo}</h2>
                <CampoTexto aoAlterar={valor => setNome(valor)} valor={nome} label='Nome' placeholder='Digite seu nome'/>
                <CampoTexto aoAlterar={valor => setCargo(valor)} valor={cargo} label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto aoAlterar={valor => setImagem(valor)} valor={imagem} label='Imagem' placeholder='Informe o endereço da imagem'/>
                <CampoComboBox aoAlterar={valor => setTime(valor)} valor={time} label='Time' itens={times}/>
                <button className='formulario_botao'>Criar Card</button>
            </form>
        </section>
    )
}

export default Formulario

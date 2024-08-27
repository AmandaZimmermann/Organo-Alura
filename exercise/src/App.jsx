import { useState } from 'react'
import './App.css'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Formulario'
import ContainerCard from './componentes/ContainerCard/ContainerCard'
import Rodape from './componentes/Rodape/Rodape'


function App() {

  const times = [
    {
      titulo:'Programação',
      corCard:'#57C278',
      corContainerCard:'#00C86F26'
    },
    {
      titulo:'Front-end',
      corCard:'#82CFFA',
      corContainerCard:'#E8FFFF'
    },
    {
      titulo:'Data Science',
      corCard:'#A6D157',
      corContainerCard:'#E9FFE3'
    },
    {
      titulo:'Devops',
      corCard:'#E06B69',
      corContainerCard:'#F1616526' 
    },
    {
      titulo:'UX e Design',
      corCard:'#DB6EBF',
      corContainerCard:'#DC6EBE26'
    },
    {
      titulo:'Mobile',
      corCard:'#FFBA05',
      corContainerCard:'#FFBA0526'
    },
    {
      titulo:'Inovação e Gestão',
      corCard:'#FF8A29',
      corContainerCard:'#FF8C2A26'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='App'>
      <Banner/>
      <Formulario times={times.map(time => time.titulo)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <h1>Minha Organização:</h1>
      {times.map(time => <ContainerCard 
      key={time.titulo}
      titulo={time.titulo} 
      corContainerCard={time.corContainerCard} 
      corCard={time.corCard}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.titulo)}
      />)}
      <Rodape/>
    </div>
  )
}

export default App

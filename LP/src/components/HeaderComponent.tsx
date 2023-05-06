import React from 'react'
import { Header } from './styles'
import logo from '../assets/DR-logo.svg'


const HeaderComponent = () => {
  return (
    <Header>
              <img src={logo} alt='Doin & Ribeiro imagotipo' />
              <nav>
                <a href="">Home</a>
                <a href="">Sobre nós</a>
                <a href="">área de atuação</a>
                <a href="">contato</a>
              </nav>
    </Header>
  )
}

export default HeaderComponent
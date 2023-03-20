import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ComponentContainer } from './style'
import Logo from '../../../../assets/Logotipo.png'


const HeaderComponent = () => {
  return (
    <ComponentContainer>
        <div className='logo-box'>
            <img src={Logo} />
        </div>
        <nav>
            <a href="">início</a>
            <a href="">sobre nós</a>
            <a href="">área de atuação</a>
            <a href="">associados</a>
        </nav>
    </ComponentContainer>
  )
}

export default HeaderComponent
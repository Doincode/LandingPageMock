import React from 'react'
import { Header } from './styles'
import logo from '../assets/DR-logo.svg'
import {Link, Outlet} from 'react-router-dom'


const HeaderComponent = () => {
  return (
    <>
      <Header>
        <img src={logo} alt='Doin & Ribeiro imagotipo' />
        <nav>
          <Link to='/'>início</Link>
          <Link to='/sobre-nos'>sobre nós</Link>
          <Link to='/area-criminal'>área de atuação</Link>
        </nav>
      </Header>
      <Outlet/>
    </>
  )
}

export default HeaderComponent
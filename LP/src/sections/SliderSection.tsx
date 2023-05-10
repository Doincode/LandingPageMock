import React from 'react'
import { SliderContent, VideoWrapper } from './style'
import bcimage from '../assets/bc.png'
import brasilimage from '../assets/brasil.png'
import arrestimage from '../assets/arrest.png'

const SliderSection = () => {
  return (
    <SliderContent>
        <img src={bcimage} alt="" />
        <div className="slider-box">
            <h3>Atuação presencial em Flagrantes</h3>
            <p>Atuamos em prensencialmente em Balneário Camboriú, Curitiba, Itajaí, Navegantes, Região Metropolitana de Curitiba, Camboriú e Itapema</p>
            <button>Clique aqui</button>
        </div>
    </SliderContent>
  )
}

export default SliderSection
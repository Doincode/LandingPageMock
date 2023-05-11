import React from 'react'
import { MainWrapper, SliderContent, BackgroundWrapper } from './style'
import bcimage from '../assets/bc.png'
import brasilimage from '../assets/brasil.png'
import arrestimage from '../assets/arrest.png'

const slides = [['ImgBackground', 'TitleClass', 'Title', 'TextClass', 'Text', 'ButtonClass', 'Button', 'ButtonRef']]

const SliderSection = () => {


  
  return (
    <MainWrapper>
      <SliderContent>
        <div className='slider'>
          <div className='slide'>
              <img src={bcimage} alt="" />
              <h3 className=''>Sempre Prontos!</h3>
              <p>Atuamos em todo o Brasil</p>
              <button className=''>Clique aqui</button>
          </div>
          <div className='slide'>
              <img src={arrestimage} alt="" />
              <h3 className=''>Sempre Prontos!</h3>
              <p>Atuamos em todo o Brasil</p>
              <button className=''>Clique aqui</button>
          </div>
          <div className='slide'>
              <img src={brasilimage} alt="" />
              <h3 className=''>Sempre Prontos!</h3>
              <p>Atuamos em todo o Brasil</p>
              <button className=''>Clique aqui</button>
          </div>
        </div>
      </SliderContent>
    </MainWrapper>
  )
}

export default SliderSection
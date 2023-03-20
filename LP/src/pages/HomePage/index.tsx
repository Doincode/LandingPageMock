import React from 'react'
import HeaderComponent from './pageComponents/header'
import { PageContainer } from './style'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import bg from '../../assets/handshake.mp4'

const HomePage = () => {
  return (
    <PageContainer className='container'>
      <HeaderComponent/>
      <Parallax pages={4}>
        <ParallaxLayer>

        </ParallaxLayer>
      </Parallax>
      <div className="main-section">

        <div className="background">
          <video id='video-bg' className='background'  src={bg} autoPlay muted loop/>
        </div>
          <div className="section-header">
            <h1>Ecritório Especializado em <b>Direito Criminial,</b></h1>
            <h2>Atuação em território nacional, com ênfase no <b>PR</b> e <b>SC</b>.</h2>
          </div>
          <div className="section-element">
              <p>+20 <br/> anos de <br/> experiência <br/> credibilidade <br/>compromisso</p>
          </div>

        <div className="foreground">


        </div>
      </div>
     
    </PageContainer>
    )
}

export default HomePage
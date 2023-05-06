import React from 'react';
import { useSpring, animated } from '@react-spring/web'
import {MainWrapper, WhatsAppButton, VideoBackground, VideoWrapper , MainContent, LogoTitle, MainSubtitle, LogoComponent } from './style'
import handshake from '../assets/handshake.mp4'
import wppicon from '../assets/wpp_icon.svg'



const MainSection = () => {
  const videoSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const contentSpring = useSpring({
    from: { transform: 'translate(-50%, -60%)', opacity: 0 },
    to: { transform: 'translate(-50%, -50%)', opacity: 1 },
    delay: 500,
    config: { tension: 280, friction: 120 },
  });

  return (
    <MainWrapper>
         <VideoWrapper>
            <VideoBackground
                src={handshake}
                autoPlay
                loop
                muted
                style={videoSpring}
            />      
        </VideoWrapper> 
       <MainContent style={contentSpring}>
            <LogoComponent>
                <LogoTitle>
                    <h1>Doin Ribeiro</h1>
                </LogoTitle>
                <MainSubtitle>
                    <h2>advocacia criminal</h2>
                </MainSubtitle>
            </LogoComponent>
            <div className='group-2'>
              <div className='subtitle'>
                  <h2>
                    <b>Tradição e excelência em soluções Criminais</b>
                  </h2>
                  <h2>Escritório especializado</h2>    
              </div>
              <WhatsAppButton>
                <div>
                  <small>Precisando de um especialista?</small>
                  <span>Fale conosco!</span>
                </div>
                <img src={wppicon} alt='' />
              </WhatsAppButton>
            </div>
      </MainContent> 
    </MainWrapper>
  );
};

export default MainSection;
import React from 'react';
import { useSpring, animated } from '@react-spring/web'
import {MainWrapper, VideoBackground, VideoWrapper , MainContent, LogoTitle, LogoSubtitle, LogoComponent } from './style'
import handshake from '../assets/handshake.mp4'



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
                <LogoSubtitle>
                    <h2>advocacia criminal</h2>
                </LogoSubtitle>
            </LogoComponent>
        <div className='subtitle'>
            <h2>
                <b>Tradição e excelência em soluções Criminais</b>
            </h2>
            <h2>Escritório especializado</h2>    
        </div>
      </MainContent>
    </MainWrapper>
  );
};

export default MainSection;
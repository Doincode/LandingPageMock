import styled from "styled-components"
import { animated } from '@react-spring/web'
import "@fontsource/ephesis"

export const MainWrapper = styled.main`
    
    @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');


    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;
  
  export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  `
  
  export const VideoBackground = styled(animated.video)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: blur(20px);
  box-shadow: inset 0 0 130px 190px rgba(0, 0, 0, 0.5);
`;



export const MainContent = styled(animated.div)`

    justify-content: space-evenly;
    align-content: center;
    height:100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    color: #fff;
    display: flex;
    flex-direction: column;

    .subtitle{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const LogoTitle = styled(animated.div)`
    h1{
        text-align: center;
        font-family: "Ephesis", cursive;
        font-size: 17vw;
        text-align: center;
    }

`
export const LogoSubtitle = styled(animated.div)`
    h2{
        letter-spacing: .4rem;
        
        font-family: 'Calistoga', cursive;
        font-size: 3.5vw;
        text-align: center;
        position: relative;
        bottom: .8rem;
        
        
        background: linear-gradient(55deg, #ECC820, #E4C47C, #ECC820, #ECC820, #E4C47C,#ECC820, #EBB12B, #EBB12B);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
        
    }
        `
export const LogoComponent = styled(animated.div)`
    max-width: 800px;
    
    background: linear-gradient(55deg, #ECC820, #E4C47C, #ECC820, #ECC820, #E4C47C,#ECC820, #EBB12B, #EBB12B);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`

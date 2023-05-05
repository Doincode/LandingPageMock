import styled from 'styled-components'
import { animated } from '@react-spring/web'
import '@fontsource/ephesis'

export const MainWrapper = styled.main`
    
    @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');

    width: 100%;
    height: 100vh;
` 
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
`
export const Header = styled(animated.div)`
    height: 5rem;
    width: 100vw;
    
    align-self: center;  
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;

    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,.3) 0%, rgba(0,0,0,.3) 10%, rgba(244,244,244,0) 100%);


  img{
    height: 2rem;
  }

  

`
export const WhatsAppButton = styled(animated.div)`
    display: flex;
    justify-content: flex-start;
    background: rgba(82, 206, 95, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    height: 4.5rem;
    min-width: fit-content;
    width: inherit;
    max-width: 18.9rem;
    border-radius: 30px;
    
    img{
        height: 5.3rem;
        position: relative;
        left: 5%;
    }
    
    div{
        color: white;
        position: relative;
        left: 5%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: none;
        
    }
    
` 
export const MainContent = styled(animated.div)`
    color: #fff;

    height:100%;
    width: 80%;
    
    position: absolute;
    top: 50%;
    left: 50%;
    
    transform: translate(-50%, -50%);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20%;
    
    .subtitle{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-shadow: -2px 5px 4px rgba(197, 145, 44, 0.8);
    }

    .group-2{
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 3rem;
    }
    

  

`
export const LogoTitle = styled(animated.div)`
    h1{
        text-align: center;
        font-family: 'Ephesis', cursive;
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

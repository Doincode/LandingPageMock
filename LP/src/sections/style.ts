import styled from 'styled-components'
import { animated } from '@react-spring/web'
import '@fontsource/ephesis'

export const MainWrapper = styled.div`
    
    @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');

    width: 100%;
    height: 100vh;
` 
export const BackgroundWrapper = styled.div`
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

export const WhatsAppButton = styled(animated.div)`
    display: flex;
    justify-content: flex-start;
    background: rgba(82, 206, 95, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    height: 4.5rem;
    min-width: fit-content;
    width: min-content;    
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
    export const MainSubtitle = styled(animated.div)`
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



export const CardsContent = styled(animated.div)`
    height: 100vh;
    width: 100%;

    background: #F8F1F6;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    > p{
        margin-top: 2rem;
        width: 80%;
        text-align: center;
        font-size: 1.4rem;
        
    }
    h3{
        color: #F8F1F6;
        font-size: 1.8rem;

        width: 100%;
        height: 20%;
        padding-top: 10%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: center;
        background: linear-gradient(90deg, rgba(184, 102, 0, 0.5) -0.14%, rgba(184, 102, 0, 0.721958) 10.31%, #B86600 46.65%, rgba(184, 102, 0, 0.696918) 94.47%, rgba(184, 102, 0, 0.5) 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p{
        font-weight: 600;
        color: #2A324B;
    }

    ul{
        display: flex;
        gap: 2rem;

        justify-content: center;
        align-items: center;

        height: 60%;
        width: 85%;
        overflow: scroll;

        
    }
    ul > div{
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    }
    li{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        align-items: center;

        font-family: 'Calistoga', cursive;
        font-weight: bold;
        color: #2A324B;
    
        text-align: center;
        width: 8rem;
    }
    #fourth > p{
        height: 2rem;
        width: 11rem;
        display: flex;
        align-items: center;
        position: relative;
        top: .5rem;
    }
    img{
        max-width: 70%;
        filter: drop-shadow(2px 2px 4px rgba(184, 102, 0, 50%));
    }
`
export const Card = styled(animated.div)`
    height: 8rem;
    width: 7rem;
    
    display: flex;
    justify-content: center;
    
    background: #F8F1F6;
    border: 2px solid rgba(184, 102, 0, 0.6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 33px;
    `



export const SliderContent = styled(animated.div)`
    height: 100vh;
    width: 100%;
    overflow: scroll;
    
    
    
    .slider{
        position: relative;
        background-color: rgba(20, 55, 15, 0.55);
        width: 300%;
        height: 100vh;
        display: flex;
    }
    .slide{
        height: 100%;
        width: ${100/3}%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    
    img{
        position: absolute;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        filter: blur(5px);
    }
    h3{
        border-radius: .2rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 1rem;
        background-color: blue;
        color: white;
        font-family: 'Varela Round',sans-serif;        
        font-size: 3.5vw;
        font-weight: 900;
        font-size: 1.8rem;
        text-align: center;
    }
    p{
        font-family: 'Varela Round',sans-serif;        
        font-size: 3.5vw;
        color: #fff;
        font-weight: 500;
        text-align: center;
    }
    button{
        height: 4rem;
        width: 70%;
    }
    
`
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
    
    height: fit-content;
    min-height: 4.5rem;
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
    width: 100%;
    background: #F8F1F6;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 10vh;
    
    > p{
        width: 80%;
        text-align: center;
        font-size: 1.4rem;
        
    }
    h3{
        color: #F8F1F6;
        font-size: 1.8rem;

        width: 100%;
        height: 20%;
        padding: 10% 0%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: center;
        background: linear-gradient(90deg, rgba(31, 46, 66, 0.8) -0.14%, rgba(31, 46, 66, 0.9) 10.31%, #1f2e42 46.65%, rgba(31, 46, 66, 0.9) 94.47%, rgba(31, 46, 66,0.8) 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p{
        margin-top: 1rem;
        font-weight: 600;
        color: #2A324B;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 3rem;

        justify-content: center;
        align-items: center;
    }
    ul > div{
        display: flex;
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
    border: 2px solid #1F2E42;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 33px;
`
export const SliderContent = styled(animated.div)`
    position: relative;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 110vh;
    width: 100%;
    overflow: hidden;
    
    .slider{
        position: relative;
        width: 300%;
        height: 100vh;
        display: flex;
        transition: transform 1s;
    }
    .slide-2{
        transform: translateX(-99vw); 
    }
    .slide-3{
        transform: translateX(-200vw); 
    }
    .slide{
        height: 100vh;
        width: ${100/3}%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    
    .slide > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3vh;
    }
    .slide img{
        position: absolute;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        filter: blur(5px);
    }
    h3{
        min-width: fit-content;
        width: min-content;
        border-radius: .2rem;
        box-shadow: 4px 10px 10px rgba(255, 255, 255,1.55);
        padding: 1rem 3rem;
        color: white;
        font-family: 'Varela Round',sans-serif;        
        font-size: 8vw;
        font-weight: 900;
        text-align: center;
    }
    .bc-slide{
        color: white;
        text-shadow: 0px 5px 15px black;
        background-color: rgba(31, 96, 266, .5);
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }
    ul > li:first-child{
        font-size: 5.5vw;
        text-shadow: 0px 5px 15px #0E6BA8;
    }
    li{
        color: white;
        font-family: 'Varela Round',sans-serif;        
        font-size: 4vw;
        color: #fff;
        font-weight: 700;
        text-align: end;
        text-shadow: 0px 5px 5px rgba(31, 46, 66, .9);
    }
    p{
        width: 80%;
        font-family: 'Varela Round',sans-serif;        
        font-size: 6.5vw;
        color: #fff;
        font-weight: 700;
        text-align: center;
        text-shadow: 0px 5px 6px #0E6BA8;

    }
    .align-left{
        text-align: start;
    }
    .arrow-buttons{
        position: absolute;
        height: 15%;
        width: 100vw;
        top: 50vh;
        display: flex;
        justify-content: space-between;
        padding: 0rem 0rem;
        opacity: 70%;
        z-index: 2;
        
    }
    .arrow-buttons img{
        box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.4);
        width: 10vw;
        object-fit: cover;

    }
    button{
        color: white;
        font-weight: 600;
        font-size: 1.4rem;

        background-color: rgba(31, 96, 266, 1);
        border-radius: 4rem;
        border: 3px solid rgba(255, 255, 255,.55); 
        box-shadow: 2px 2px 1rem rgba(131, 146, 166, .8); 
        padding: 2rem 1rem;
    }
    
`
export const ContactContent = styled(animated.div)`
        position: relative;
        
        height: 70vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;    
        justify-content: space-around;    

        background: #F8F1F6;
        .content-wrapper{
            width: 100%;
            height: 100%;
        }
        img{
            z-index: -1;
            display: none;
            width: 100%;
            opacity: 10%;

            /* z-index: -1;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            filter: blur(20px);
            box-shadow: inset 0 0 130px 190px rgba(0, 0, 0, 0.5); */
        }
        
        .socials{
            display: flex;
            width: 80%;
            justify-content: space-around;
            padding-bottom: 1rem;
            border-bottom: solid .5rem #1F2E42;
        }
        .socials img{
            height: 2.4rem;
        }

        .map{
            background-color: greenyellow;

            height: 30%;
            width: 100%
        }
        .marker{
            margin-bottom: 2.5rem;
        }
`
export const CounterContent = styled(animated.div)`
    height: 30vh;
    background-color: rgba(31, 46, 66, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
        h3{
            color: white;
            font-size: 7vw;
            font-weight: normal;
            font-family: 'Varela Round',sans-serif;        
            
        }
        p{
            color: white;
            font-family: 'Calistoga', cursive;
            font-size: 6vw;
        }
        .counter{
            display: flex;
            align-items: center;
            gap: 1vw;

        }

        .counter > p:first-child{
            padding: .7rem .5rem;
            border-radius: 20%;
            border: solid 2px red;
            font-size: 2.8rem;
        }

 `

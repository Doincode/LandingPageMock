import styled from 'styled-components'

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    

    
    overflow-y: auto;
    overflow-x: hidden;

    perspective: 10px;

    #video-bg{
        width: 100vw;
    }

    .background{
        transform: translateZ(-10px) scale(2);
    }

    
    
    .background, .foreground{
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .main-section{
        padding: 1rem;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        transform-style: preserve-3d;
        z-index: -1;
    }
    .section-header{
        display: flex;
        flex-direction: column;
        width: 55%;
    }

        
    // @media (min-aspect-ratio: 16/9){
    //     #video-bg {
    //         width: 100%;
    //         height: auto;
    //     }
    // }
    // @media (max-aspect-ratio: 16/9){
    //     #video-bg {
    //         width: auto;
    //         height: 100%;
    //     }
    // }
`
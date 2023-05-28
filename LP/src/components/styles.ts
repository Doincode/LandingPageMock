import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Header = styled.header`
    height: 5rem;
    width: 100vw;
    position: absolute;
    z-index: 1;
    padding-bottom: 0.5rem; 
    
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
import { createGlobalStyle } from 'styled-components'
import '@fontsource/ephesis'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;800;900&display=swap');

    * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  :root{
    --color-primary: #061121;
    --color-gray: #D9D9D9;
    --color-white: #FFFFFF;
    --color-black: #000000;
    
    --color-sucess: #168821;
    --color-warning: #ffcf07;
    --color-negative: #e60000;
    --color-information: #155bcb;

    --third-font: 'Judsson', serif;

  }
  body {
    background-color: #061121;
  }

  h2{
    font-family: 'Varela Round', sans-serif;
    text-align: center;
    font-size: 1rem;
  }
  
  h2 > b{
      font-size: 1.3rem;

  }
  h3{
    
  }
  

  a{
    font-size: .9rem;
    text-decoration: none;
    text-align: center;
    font-family: var(--third-font);
    color: #FFFFFF;
  }
  small{
    font-family: var(--third-font);
    font-weight: 600;
    font-size: .9rem;
    text-align: center;      
  }
  span{
    font-size: 1.8rem;
    font-weight: bold;
    font-family: var(--third-font);
    text-align: center;      
  }
  p{
  }
  nav{
    font-size: .8rem;
    display:flex;
    gap: 1rem;
    justify-content: center;
}

`
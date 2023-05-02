import { createGlobalStyle } from 'styled-components'
import '@fontsource/ephesis'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

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
  }
  body {
    background-color: #061121;
  }

  h2{
    text-align: center;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.2rem;
}

    h2 > b{
        font-size: 2rem;

    }

`
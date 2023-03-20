import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap');


:root{
    --color-one: #F5CD53;
    --color-two: #CF9728;
    --color-three: #FFFFFF;
    --color-four: #DAD2D8;
    --color-five: #000000;
    
    --color-success: #168821;
    --color-warning: #ffcf07;
    --color-negative: #e60000;
    --color-information: #155bcb;


    --title-size-one: 4.5rem;
    --title-size-two: 1.5rem;

    background-color: var(--color-four);

  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    }

    body, html{
        min-width: 100%;
        margin: 0 auto;
    }


    #root{
        display: flex;
        justify-content: center;
    }

    .container{
        max-width: 2000px;
    }

    h1{
        font-family: 'Judson';
        font-size: var(--title-size-one);
        color: var(--color-three);
    }

    h2{
        font-family: 'Judson';
        font-size: var(--title-size-two);
        color: var(--color-four);
    }

`
import styled from 'styled-components'

export const ComponentContainer = styled.div`
    height: 120px;
    width: 100vw;
    max-width: inherit;

    margin: 0 auto;
    padding: 16px 50px;
    
    position: absolute;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav{
        display: flex;
        justify-content: space-around;
        width: 60%;
        font-size: 20px;
    }

    a{
        text-decoration: none;
        font-family: 'Judson';
        color: var(--color-three)
    }

    a:hover{
        border-bottom: solid 4px var(--color-one);
    }

    
    .logo-box{
        height: 100%;
    }
 

`
import styled from "styled-components";

const styleTipo1 = `
    bottom: 0;
    width: 100%;
    position: relative;
    background-color: #F5AC00;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 800px){
        bottom: 0;
        width: 100%;
        background-color: #F5AC00;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const styleTipo2 = `
    bottom: 0;
    width: 100%;
    background-color: #F5AC00;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 1025px){
        bottom: 0;
        width: 100%;
        background-color: #F5AC00;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const styleTipo3 = `
bottom: 0;
width: 100%;
background-color: #F5AC00;
position: relative;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width: 1025px){
    bottom: 0;
    width: 100%;
    background-color: #F5AC00;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

`
const Footer = styled.footer`
    
    ${(props) => {
        switch (props.tipo) {
            case "tipo1":
                return styleTipo1
        
            case "tipo2":
                return styleTipo2

            default:
                return styleTipo3
        }
    }}
`;

const Logo = styled.img`
    height: 2.5em;
`;

const DivLogo= styled.div`
    @media screen and (max-width: 800px){
        display: none;
    }
`;

const DivRede = styled.div`

    @media screen and (max-width: 800px){
        margin: auto;
    }
`;

const ListaRede = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding-top: 5px;

    @media screen and (max-width: 800px){
        margin-right: 0;
    }
`;

const IconeRedeSocial = styled.img`
    margin-left: 5px;
    padding: 10px;
    height: 25px;
`;

export { Footer, Logo, DivRede, DivLogo, ListaRede, IconeRedeSocial}

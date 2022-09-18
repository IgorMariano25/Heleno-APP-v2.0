import styled from "styled-components";

const Footer = styled.footer`
    bottom: 0;
    width: 100%;
    background-color: #F5AC00;
    position: absolute;
    display: flex;

    @media screen and (max-width: 1025px){
        bottom: 0;
        width: 100%;
        background-color: #F5AC00;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const FooterPagPrincipal = styled.footer`
    bottom: 0;
    width: 100%;
    position: relative;
    background-color: #F5AC00;
    display: flex;

    @media screen and (max-width: 800px){
        bottom: 0;
        width: 100%;
        background-color: #F5AC00;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Logo = styled.img`
    height: 2.5em;
    margin-right: 0%;
    margin-top: 0.8em;
    margin: 0,0138%; /* 15px / 1080px*/
    margin-left: 10em;
`;

const DivLogo= styled.div`
    @media screen and (max-width: 800px){
        display: none;
    }
`;

const DivRede = styled.div`
    margin-left: auto;

    @media screen and (max-width: 800px){
        margin: auto;
    }
`;

const ListaRede = styled.ul`
    display: flex;
    list-style-type: none;

    @media screen and (max-width: 800px){
        margin-right: 0;
    }
`;

const IconeRedeSocial = styled.img`
    margin-left: 5px;
    padding: 10px;
    height: 25px;
`;

export { Footer, FooterPagPrincipal, Logo, DivRede, DivLogo, ListaRede, IconeRedeSocial}

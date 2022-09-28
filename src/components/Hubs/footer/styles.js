import styled from "styled-components";

const Footer = styled.footer`
    width: 100%;
    background-color: #F5AC00;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 1025px){
        width: 100%;
        background-color: #F5AC00;
        display: flex;
        align-items: center;
        justify-content: center;
    }
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

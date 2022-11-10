import styled from "styled-components";

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #F5AC00;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px){
        justify-content: space-around;
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
    height: 45px;
`;

export { Footer, Logo, DivRede, DivLogo, ListaRede, IconeRedeSocial}

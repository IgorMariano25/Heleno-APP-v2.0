import styled from "styled-components";

const Card = styled.div`
    top: 0px;
    left: 2.083em;
    width: 100%;
    height: 4.6875em;
    background-color: #002555;
    display:flex;
    a {
        text-decoration: none;
        color: white;
        
        transition: --offset 300ms, text-decoration-color 300ms;
    }
    a:hover{
        text-decoration: underline;
        text-underline-offset: 0.4em;
        color: #F5AC00
    }
`;

const Img = styled.img`
    height: 3em;
    margin-right: 0%;
    margin: 15px;
    margin-left: 10em;
`;

const Textos = styled.div`
    font-family: 'Barlow';
    font-weight: 500;
    font-style: italic;
    font-size: 18px;
    flex-grow: 1;
    padding: 0.8em;
    border-radius: 0  8px  8px 0;
    text-decoration: none;
    color:white;
    margin: 1%;
    margin-left: 10px;
    ul{
        list-style: none;
    }
    ul li{
        display: inline;
        margin-right: 35px;
    }
    ul li ul{
        width: 200px;
        text-align: center;
        
        margin-left: 300px;
    }
    ul li ul li{
        background-color: grey;
        display: none;
        text-align: center;
        margin-right: 0px;
        padding: 10px;
        box-shadow: 0 0 3px 0 black;
    }

    #li-educacao:hover{
        cursor: pointer;
        color: #F5AC00
    }
    
    #li-educacao:hover > #menu-educacao li{
        display: block;
    }
`;

const DivRede = styled.div`
    margin-right: 230px;
`;

const ListaRede = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
`;

const IconeRedeSocial = styled.img`
    height: 18px;
`;

export { Card, Img, Textos, DivRede, ListaRede, IconeRedeSocial}

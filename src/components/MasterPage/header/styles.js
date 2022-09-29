import styled from "styled-components";


const Card = styled.div`

    top: 0px;

    left: 2.083em;

    width: 100%;

    height: 4.6875em;

    background-color: #002555;

    display:flex;
    a{
        margin: 35px;
    }

    a, span {

        text-decoration: none;

        color: white;

        transition: --offset 300ms, text-decoration-color 300ms;

    }
    span{
        margin: 30px;
    }

    a:hover, span:hover, li:hover{
        cursor: pointer;
        text-decoration: underline;

        text-underline-offset: 0.4em;

        color: #F5AC00

    }
    span:hover #dropdown-educacao{
        display: block;
    }
    #dropdown-educacao:hover #dropdown-educacao{
        display: block;
    }
    #dropdown-educacao{
        display: none;
        flex-direction: column;
        background-color: grey;
        width: 200px;
        text-align: center;
        margin-left: 480px;
        list-style: none;
        margin-top: 0px;
    }
    #dropdown-educacao li{
        margin: 0px;
        margin-left: -40px;
        box-shadow: 0 0 1px 0 black;
        text-align: center;
        padding: 10px;
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

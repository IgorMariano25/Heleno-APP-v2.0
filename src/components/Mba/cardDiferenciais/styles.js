import styled from "styled-components";

const Card = styled.div`
    background-color: #2541C0;
    color: white;
    margin-left: 50px;
    margin-right: 50px;
`;

const Imagem = styled.img`
    width: 100%;
    margin: 10px;
    margin-top: 0;
`;

const Titulo = styled.h4`
    font-family: 'Open Sans', sans-serif;
    font-size: 21px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const Descricao = styled.p`
    justify-content: left;
    text-align: left;
    margin-top: 0px;
    font-family: 'Montserrat', sans-serif;
`;

export {Card, Imagem, Titulo, Descricao};
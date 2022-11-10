import styled from "styled-components";

const Img = styled.img`
    height: 34em;
    margin-top: 2em;
    margin-left: 20vw;
    margin-right: 10%;
    margin-bottom: 0.8em;
`;

const Titulo = styled.h1`
    font-family: 'Barlow';
    font-size: 25px;
    font-weight: 800;
    margin-right: 2vw;
`;

const Subtitulo = styled.span`
    font-family: 'Barlow';
    font-weight: 100;
    font-size: 25px;
    font-style: italic;
`;

const Informacoes = styled.div`
    margin-top: 1em;
    display: block;
    border-radius: 0;
`;

const BoxFormulario = styled.div`
    margin-top: 1em;
    display: grid;
    border-radius: 0;
`;

const Form = styled.input`
    font-family: 'Barlow';
    font-size: 14px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: uppercase;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: solid 2px #000000;
    width: 35vw;
    margin-bottom:2em;
`;

const Conteudo = styled.div`
    margin-top: 100px;
    display:flex;
`;

const Botao = styled.button`
    background-color: #002555;
    border: none;
    border-radius: 5px;
    height: 3em;
    color: white;
    font-weight: 800;
    &:active{
        transform: scale(0.94);
        transition: transform 0.2s ease;
    }
    &:hover{
        background-color: #061c38;
    }
`;

export { Titulo, Informacoes, Subtitulo, Form, Img, BoxFormulario, Conteudo, Botao };
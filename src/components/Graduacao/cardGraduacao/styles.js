import styled from "styled-components";

const Card = styled.a`
    width: 15em;
    border-width: 1px;
    background-color: #002555;
    display: flex;
    border-radius: 5%;
    flex-flow: column;
    padding: .5em;
    text-decoration: none;
    color: black;
    height: 13.5em;


    &:hover{
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`;

const ContainerModal = styled.div`
    width: 100%;
    padding: 15px;

`;

const CaixaTextos = styled.div`
    height: 100%;
    padding: 1em;
    font-family: "Barlow";
    background-color: #F5AC00;
    flex-direction: column-reverse;
    text-align: center;
    border-radius: 4%;
`;

const Nome = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    font-style: Italic;
`;

const Curso = styled.div`
    font-weight: 400;
`;

const Icone = styled.div`
    font-weight: 700;
`;

const CaixaGrid = styled.div`
    margin-left: 13%;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    width: fit-content;
`;

export { Card, ContainerModal, CaixaTextos, Nome, Curso, Icone, CaixaGrid, Grid };
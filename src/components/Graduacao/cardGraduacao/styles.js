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


    &:hover{
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`;

const ContainerModal = styled.div`
    width: 100%;
    padding: 15px;

`;

const Textos = styled.div`
     font-family: "Barlow";
     background-color: #F5AC00;
     flex-grow: 1;
     padding: 1em;
     text-align: center;
     bottom: 0;
     margin: 0;
     width: auto;
     border-radius: 5%;
`;

const Nome = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    font-style: Italic;
`;

const Curso = styled.p`
       font-weight: 400;
`;

export { Card, ContainerModal, Textos, Nome, Curso};
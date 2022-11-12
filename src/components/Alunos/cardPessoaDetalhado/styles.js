import styled from "styled-components";

const Card = styled.a`
    margin-top: 75px;
    border-width: 1px;
    background-color: #002555;
    display: flex;
    flex-flow: column;
    padding: .5em;
    text-decoration: none;
    color: black;
`;

const CardDetalhado = styled.div`
    margin-top:75px;
    border-width: 1px;
    background-color: #002555;
    display: flex;
    flex-flow: column;
    padding: .5em;
    text-decoration: none;
    color: black;
`;

const Img = styled.img`
      width: 10em;
      border-radius: 50%;
      margin: auto;
      margin-top: 35px;
      margin-bottom: 35px;
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
`;

const Nome = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    font-style: Italic;
`;

const Curso = styled.p`
     font-weight: 400;
`;

const Bio = styled.p`
    font-weight: 400;
    font-style: Italic;
`;

const Ingresso = styled.p`
    font-weight: 400;
    font-style: Italic;
`;

const Projetos = styled.p`
    font-weight: 400;
    font-style: Italic;
`;

const PrevFormatura = styled.p`
    font-weight: 400;
    font-style: Italic;
`;

export { Card, CardDetalhado, Img, Textos, Nome, Curso, Bio, Ingresso, PrevFormatura, Projetos};
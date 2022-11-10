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

const Img = styled.img`
      width: 10em;
      border-radius: 50%;
      margin: auto;
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
     border-bottom-left-radius: 5%;
     border-bottom-right-radius: 5%;
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

export { Card, ContainerModal, Img, Textos, Nome, Curso, Bio, Ingresso, PrevFormatura, Projetos};
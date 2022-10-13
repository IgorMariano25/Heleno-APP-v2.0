import styled from "styled-components";

const Card = styled.a`
    margin-top: 100px;
    width: 15em;
    border-width: 1px;
    background-color: #002555;
    display: flex;
    border-radius: 5%;
    flex-flow: column;
    padding: .5em;
    text-decoration: none;
    color:black;

    &:hover{
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`;

const Img = styled.img`
      width: 10em;
      border-radius: 50%;
      margin: auto;
`;

const Textos = styled.div`
     font-family: 'Barlow';
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

const Título= styled.p`
    text-transform: uppercase;
    font-weight: 600;
    font-style: Italic;
`;

const Tecnologias = styled.p`
     font-weight: 400;
`;

const Participantes = styled.p`
     font-weight: 400;
`;

export {Card, Img, Textos, Título, Tecnologias, Participantes}
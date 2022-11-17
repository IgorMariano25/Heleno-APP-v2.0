import styled from "styled-components";


const Card = styled.div` 
    height: 21em;
    width: 16em;
    background-color: #F5AC00;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    padding: 1em;
`;

const Conteudo = styled.div`
     font-family: 'Barlow';
     text-align: center;
     width: auto;
     padding: 1em;
     flex-grow: 1;
`;

const Nome = styled.p`
    text-transform: uppercase;
    font-weight: 600;
`;

const Texto = styled.p`
     font-weight: 400;
`;

const Img = styled.img`
      margin: auto;
      width: 11.5em;
      border-radius: 50%;
`;


export { Conteudo, Img, Card, Nome, Texto };

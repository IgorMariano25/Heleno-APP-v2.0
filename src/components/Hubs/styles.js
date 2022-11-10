import styled from "styled-components";

const Card = styled.div` 
    height: 11.5em;
    width: auto;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    padding: .4em;
`;

const Conteudo = styled.div`
     font-family: 'Barlow';
     text-align: center;
     width: auto;
     padding-top: -100px;
`;

const Texto = styled.p`
     line-height: 1.15;
     font-weight: 400;
     margin: 0px;
`;

const Img = styled.img`
      margin: auto;
      width: 9em;
`;


export { Conteudo, Texto, Img, Card };

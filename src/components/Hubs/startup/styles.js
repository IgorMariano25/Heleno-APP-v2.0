import styled from "styled-components";

const Link = styled.a`
     text-decoration: none;
     color: black;
     
     &:hover{
        color: black;
    }
`;

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
     padding: .5em;
     flex-grow: 0;
`;

const Texto = styled.p`
     line-height: 1.15;
     margin: 0;
`;

const Img = styled.img`
      margin: auto;
      width: 9em;
`;


export { Conteudo, Texto, Img, Card, Link };

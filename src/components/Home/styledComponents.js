import styled from "styled-components";

const ConteudoPage = styled.div`
    min-height: 50vh;
    min-width: 80vw;
    width: 40vw;
    z-index: 9;
`;

const Titulo = styled.h1`
    font-family: barlow;
    font-size: 2em;
    color: #002555;
    text-align: left;
    z-index: 8;
`;

const P = styled.p`
    font-family: barlow;
    font-style: italic;
    font-size: 1em;
    font-weight: 200;
    color: #002555;
    text-align: left;
`;

const SubTitulo = styled.h2`
    font-family: barlow;
    font-size: 35px;
    color: #002555;
    text-align: center;
`;

export { ConteudoPage, Titulo, P, SubTitulo }

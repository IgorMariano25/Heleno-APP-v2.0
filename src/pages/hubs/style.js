import styled from "styled-components";
import hubs from '../../assets/imagens/hubs2.jpeg';


const PrimeiraSection = styled.section`
    width: 100%;
    height: 675px;
    background-color: #002555;
    background-image: url(${hubs});
    opacity: 70%;

`
const Container = styled.div`
       background-color: #002555;
       width: 100%;
       height: 675px;
`


const Img = styled.img`
    width: 70% !important;
    height: 600px;
    margin-top:75px;
    margin-left: 14%;
`


const Conteudo = styled.div`
    // margin-bottom: 40%;
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap');
    width: 85%;
    padding-left: 10%;

    @media screen and (min-width: 1224px) {
        width: 80%;
        display: flex;
        flex-flow: column;
    }

    @media screen and (min-width: 680px) {
        width: 70%;
        display: flex;
        flex-flow: column;
    }
`


const TituloImagem = styled.h1` 
    position: relative;
    font: italic 50px Impact;
    color: white;
    top: -85%;
    padding-left: 15%;
    width: 60%;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #061c38;

    @media screen and (min-width: 1224px) {
        font: italic 55px Impact;
        top: -63%;
    }

    @media screen and (min-width: 680px) {
        font: italic 55px Impact;
        top: -68%;
    }
`

const Titulo = styled.h1`
    font-family: Barlow;
    font-size: 29pt;
    padding-top: 3%;
    color: #061c38;
`


const P = styled.p`
    font-family: Barlow;
    font-size: 19pt;
    padding-top: 0%;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: black;
    color: #061c38;
    
`

const Subtitulo = styled.h3`   
    font-family: Barlow;
    font-size: 29pt;
    padding-top: 0%;
    color: #061c38;
`

const Lista = styled.ul`
    font-family: Barlow;
    font: italic;
    font-size: 19pt;
    padding-left: 8%;
    padding-top: 0%;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: black;
    color: #061c38;
`

const ImgLogo = styled.img`
    width: 55%;
    margin-left: 20%;

    @media screen and (min-width: 1224px) {
        width: 28%;
        margin-left: 80%;
        margin-right: 3%;
        margin-top: -20%;
        margin-bottom: -7%;
    }

    @media screen and (min-width: 680px) {
        width: 28%;
        margin-left: 85%;
        margin-right: 3%;
        margin-top: -20%;
        margin-bottom: -7%; 
    }
`

const SegundaSection = styled.div`
    background-color: #002555;
    height: 48em;
    width: 100%;
    margin-top: 3em;

    h1 {
        font-family: Barlow;
        color: white;
        text-align: center;
        padding-top: .8em;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 55em;
        margin: auto;
        padding: 1em;
        gap: 1.5em;   
    }

    .container > *:nth-child(3n-2):nth-last-of-type(1) {
        grid-column: span 3;
    }

    @media screen and (max-width: 1024px) {
        height: 62.5em;
        .container{
            grid-template-columns: repeat(2, 1fr);
            max-width: 40em; 
        }
        .container > *:nth-child(3n-2):nth-last-of-type(1) {
            grid-column: auto;
        }
    }

    @media (max-width: 680px){
        height: 103em;
        .container {
            grid-template-columns: repeat(1, 1fr);
            width: 75%;
            max-width: 18em; 
        }
    }

    /* @media screen and (max-width: 420px){
        .container {
            max-width: 20em;
        }
    } */
`;




export {PrimeiraSection, Img, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista, TituloImagem, Container, SegundaSection};


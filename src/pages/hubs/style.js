import styled from "styled-components";
import hubs from '../../assets/imagens/hubs2.jpeg';



const PrimeiraSection = styled.section`
    width: 100%;
    height: 512px;
    background-color: #002555;
    background-image: url(${hubs});
    opacity: 70%;

`
const Container = styled.div`
       background-color: #002555;
       width: 100%;
       height: 512px;
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
    font: italic 40px Impact;
    color: white;
    top: -80%;
    padding-left: 18%;
    width: 60%;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #061c38;

    @media screen and (min-width: 1224px) {
        font: italic 55px Impact;
        top: -63%;
    }

    @media screen and (min-width: 680px) {
        font: italic 45px Impact;
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

`;

const Botao = styled.button`
    margin-left: 35%;
    min-width: 35%;
    min-height: 75px;
    font: normal 55px Arial;
    font-size: 108%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 550;
    color: white;
    background: #002555;
    border-radius: 1000px;
    border-color: #002555;
    box-shadow: 12px 12px 24px rgba(79,209,197,.64);
    cursor: pointer;
    position: relative;
        

    @media screen and (min-width: 1224px) {
        margin-left: 43%;
        min-width: 14%;
        min-height: 60px;
        font: normal 50px Arial;
        font-size: 100%;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 550;
        color: white;
        background: #002555;
        border-radius: 1000px;
        border-color: #002555;
        box-shadow: 12px 12px 24px rgba(79,209,197,.64);
        cursor: pointer;
        position: relative;
    }

    @media screen and (min-width: 680px) {
        margin-left: 43%;
        min-width: 14%;
        min-height: 60px;
        font: normal 50px Arial;
        font-size: 100%;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 550;
        color: white;
        background: #002555;
        border-radius: 1000px;
        border-color: #002555;
        box-shadow: 12px 12px 24px rgba(79,209,197,.64);
        cursor: pointer;
        position: relative; 
    }

`


const SectionNoticia = styled.section`
    width: 45%;
    height: 380px;
    background-color: #002555;
    margin-left: 5%;
    margin-top: 7%;
    margin-bottom: 15%;

    h1 {
        font-family: Barlow;
        color: white;
        text-align: center;
        font-size: 35px;
        margin-bottom: 5px;
    }

    h3 {
        font-family: Arial;
        color: white;
        margin-left: 30px;
    }

    @media screen and (min-width: 1224px){
        width: 45%;
        height: 380px;
        margin-left: 5%;
        margin-top: 7%;
        margin-bottom: 15%;
    }

    @media screen and (min-width: 680px) {
        width: 45%;
        height: 380px;
        margin-left: 5%;
        margin-top: 7%;
        margin-bottom: 15%;
    }
`


const PrimeiraNoticia = styled.img`
    position: relative;
    width: 40%;
    height: 220px;
    margin-left: 120px;

    @media screen and (min-width: 1224px) {
        margin-left: 40px;
    }
`
const TextoNoticia = styled.p`
    position: absolute;
    background-color: white;
    color: black;
    font-size: 18px;
    width: 18%;
    margin-left: 40px;
    margin-top: -70px;

    @media screen and (min-width: 1224px) {
        font-size: 18px;
        width: 18%;
        margin-left: 40px;
        margin-top: -70px;
    }
`

const SegundaNoticia = styled.img`
    position: relative;
    width: 40%;
    height: 220px;
    margin-left: 50px;
  

    @media screen and (min-width: 1224px) {
        width: 40%;
        height: 220px;
        margin-left: 50px;
    }
`

const Texto2 = styled.p`
    position: absolute;
    background-color: white;
    color: black;
    font-size: 20px;
    width: 18%;
    margin-left: 363px;
    margin-top: -70px;
`

const ImgDiv = styled.div`
    
    img {
        width: 95%;
        margin-bottom: 5%;
        margin-left: 13%;
        margin-top: 18%;
        position: relative;

    }

    p {
        margin-left: 35%;
        margin-bottom: 40%;
        position: absolute;
    }

`

const TerceiraSection = styled.section`
   
    @media screen and (min-width: 1224px) {
        display: flex;
    }

    @media screen and (min-width: 680px) {
        display: flex;
    }
`




export {PrimeiraSection, ImgDiv, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista, TituloImagem, Container, SegundaSection, 
    Botao, SectionNoticia, PrimeiraNoticia, TextoNoticia, SegundaNoticia, Texto2, TerceiraSection};


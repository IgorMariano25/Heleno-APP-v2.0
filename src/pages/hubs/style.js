import styled from "styled-components";
import hubs from '../../assets/imagensHubs/hubs2.jpeg';



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
    width: 65%;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #061c38;

    @media screen and (min-width: 1224px) {
        font: italic 55px Impact;
        top: -63%;
        width: 80%;
    }

    @media screen and (min-width: 680px) {
        font: italic 45px Impact;
        top: -68%;
        width: 80%;
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
    margin: 10%;

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
    height: auto;
    width: 100%;
    margin-top: 2em;
    padding-bottom: 1.5em;

    h1 {
        text-transform: uppercase;
        font-family: Barlow;
        color: white;
        text-align: center;
        padding-top: .8em;
    }

    .containerStartups {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5em;
        max-width: 55em;
        margin: auto;
        padding: 1em;
    }

    .containerStartups > *:nth-child(3n-2):nth-last-of-type(1) {
        grid-column: span 3;
    }

    @media screen and (max-width: 1024px) {
        .containerStartups{
            grid-template-columns: repeat(2, 1fr);
            max-width: 40em;
        }
        .containerStartups > *:nth-child(3n-2):nth-last-of-type(1) {
            grid-column: span 2;
        }
    }

    @media screen and (max-width: 680px){
        .containerStartups {
            grid-template-columns: repeat(1, 1fr);
            width: 75%;
            max-width: 18em;
        }
        .containerStartups > *:nth-child(3n-2):nth-last-of-type(1) {
            grid-column: span 1;
        }
    }
`;

const SegundaSectionCards = styled.div`
    background-color: white;
    height: auto;
    width: 100%;
    padding-bottom: 1.5em;

    h1 {
        text-transform: uppercase;
        font-family: Barlow;
        color: black;
        text-align: center;
        padding-top: .8em;
    }

    .containerCards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 55em;
        margin: auto;
        padding: 1em;
        gap: 1.5em;
        justify-items: center;
    }

    @media screen and (max-width: 1024px) {
        .containerCards{
            grid-template-columns: repeat(2, 1fr);
            max-width: 40em;
        }
    }

    @media screen and (max-width: 680px){
        padding-bottom: 0;
        
        .containerCards {
            grid-template-columns: repeat(1, 1fr);
            width: 75%;
            max-width: 18em;
        }
    }
    `; 

const TerceiraSection = styled.section`
    background-color: #002555;
    width: 100%;
    height: 970px;
    position: relative;
    margin-bottom: 15%;

    @media screen and (min-width: 680px) {
        background-color: #002555;
        width: 100%;
        height: 500px;
        position: relative;
        margin-bottom: 8%;
    }

    @media screen and (min-width: 1224px) {
        background-color: #002555;
        width: 100%;
        height: 530px;
        position: relative;
        margin-bottom: 5%;
    }
`

const DivNoticia = styled.div`
    width: 80%;
    height: 600px;
    margin-left: 45px;
    top: 3%;
    background-color: white;
    position: relative;
    padding-top: 3%;

    h1 {
        color: #002555;
        text-align: center;
        font-size: 35px;
    }

    h3 {
        color: #002555;
        text-align: center;
    }

    @media screen and (min-width: 680px) {
        width: 50%;
        height: 420px;
        margin-left: 20px;
        top: 5%;
        background-color: white;
        position: relative;
        padding-top: 2%;

        h1 {
            color: #002555;
            text-align: center;
            font-size: 35px;
        }

        h3 {
            color: #002555;
            text-align: center;
            font-size: 25px;
            margin-top: 5%;
        }
    }

    @media screen and (min-width: 1224px) {
        width: 45%;
        height: 450px;
        margin-left: 45px;
        top: 5%;
        background-color: white;
        position: relative;

        h1 {
            color: #002555;
            text-align: center;
            font-size: 35px;
        }

        h3 {
            color: #002555;
            text-align: center;
            font-size: 25px;
            margin-top: 5%;
        }
    }

`


const PrimeiraNoticia = styled.img`
    width: 60%;
    height: 220px;
    margin-left: 75px;
    padding-top: 3%;

    @media screen and (min-width: 680px) {
        width: 47%;
        height: 260px;
        margin-left: 15px;
        padding-top: 3%;
    }

    @media screen and (min-width: 1224px) {
        width: 40%;
        height: 260px;
        margin-left: 40px;
        padding-top: 3%;
    }
`


const TextoNoticia = styled.p`
    background-color: white;
    color: black;
    font-size: 18px;
    width: 60%;
    margin-left: 80px;
    margin-top: -75px;
    position: relative;


    @media screen and (min-width: 680px) {
        background-color: white;
        color: black;
        font-size: 15px;
        width: 45%;
        margin-left: 30px;
        margin-top: -80px;
        position: relative; 
    }

    @media screen and (min-width: 1224px) {
        background-color: white;
        color: black;
        font-size: 18px;
        width: 35%;
        margin-left: 60px;
        margin-top: -75px;
        position: relative; 
    }
`

const SegundaNoticia = styled.img`
    width: 60%;
    height: 220px;
    margin-left: 75px;
    padding-top: 3%;

    @media screen and (min-width: 680px) {
        width: 45%;
        height: 220px;
        margin-left: 250px;
        margin-top: -62%;
    }

    @media screen and (min-width: 1224px) {
        width: 40%;
        height: 260px;
        margin-left: 350px;
        margin-top: -45%;
    }

`

const Texto2 = styled.p`
    background-color: white;
    color: black;
    font-size: 18px;
    width: 60%;
    margin-left: 75px;
    margin-top: -78px;
    position: relative;


    @media screen and (min-width: 680px) {
        background-color: white;
        color: black;
        font-size: 15px;
        width: 47%;
        margin-left: 250px;
        margin-top: -110px;
        position: relative;
    }

    @media screen and (min-width: 1224px) {
        background-color: white;
        color: black;
        font-size: 20px;
        width: 40%;
        margin-left: 350px;
        margin-top: -120px;
        position: relative;
    }
`

const ImgDiv = styled.div`

    img {
        width: 90%;
        margin-bottom: 5%;
        margin-left: 25px;
        margin-top: 55px;

    }

    p {
        color: white;
        margin-left: 35%;
        position: relative;
        top: -15px;
    }

    @media screen and (min-width:680px) {
        img {
        width: 45%;
        height: 350px;
        margin-bottom: 5%;
        margin-left: 500px;
        margin-top: -38%;

        }

        p {
        color: white;
        margin-left: 77%;
        position: relative;
        top: -40px;
        }
    }

    
    @media screen and (min-width: 1224px) {
        img {
        width: 45%;
        height: 450px;
        margin-bottom: 5%;
        margin-left: 760px;
        margin-top: -28%;

        }

        p {
        color: white;
        margin-left: 82%;
        position: relative;
        top: -60px;
        }
    }
`

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
    margin-bottom: 15%;


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
        margin-bottom: 10%;
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
        margin-bottom: 10%;
    }

`;



export {PrimeiraSection, ImgDiv, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista, TituloImagem, Container, SegundaSection, SegundaSectionCards,
    Botao, DivNoticia, PrimeiraNoticia, TextoNoticia, SegundaNoticia, Texto2, TerceiraSection};


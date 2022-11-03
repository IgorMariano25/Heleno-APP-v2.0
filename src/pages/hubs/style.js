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
    margin-bottom: 20em;
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap');

`;

const TituloImagem = styled.h1`
    position: relative;
    font-size: 50px;
    color: white;
    top: -8em;
    padding-left: 25%;
    width: 50%;
`

const Titulo = styled.h1`
    font-family: Barlow;
`

const ImgLogo = styled.img`
    width: 22%;
    margin-left: 70vw;
    margin-top: 5em;
`

const P = styled.p`
    font-family: Barlow;
    font-size: 15pt;
`

const Subtitulo = styled.h3`
    font-family: Barlow;
`

const Lista = styled.ul`
    font-family: Barlow;
`


export {PrimeiraSection, Img, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista, TituloImagem, Container};


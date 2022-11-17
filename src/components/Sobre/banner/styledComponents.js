import styled from "styled-components";

const Espacamento = styled.div`
    height: 4.6875em;
`;

const DivisoriaFoto = styled.div`
    background-color: rgba(0, 29, 64, 26);
    width: 100%;
    height: 1px;
`;

const Banner = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: rgb(0, 37, 85);
    height: 512px;
`;

const FotoBanner = styled.img`
    opacity: 0.3;

`;

const H1Banner = styled.h1`
    position: relative;
    top: -5em;
    left: 0%;
    font: italic 40px Impact;
    font-size: 4.9em;
    color: rgb(255, 255, 255);
    font-family: "Barlow";
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #061c38;
`;

const TextoBanner = styled.p`
    position: relative;
    top: -8em;
    left: 0%;
    font: italic 30px Impact;
    font-size: 3em;
    color: rgb(255, 255, 255);
    font-family: "Barlow";
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #061c38;
`;

export { Banner, Espacamento, DivisoriaFoto, FotoBanner, H1Banner, TextoBanner }

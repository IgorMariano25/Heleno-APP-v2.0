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
    height: 512px;
    width: 100%;
`;

const H1Banner = styled.h1`
    position: relative;
    top: -5em;
    left: 0%;
    font-weight: bolder;
    font-size: 4.9em;
    color: rgb(255, 255, 255);
    font-family: "Barlow";
`;

const TextoBanner = styled.p`
    color: rgb(255, 255, 255);
    position: relative;
    top: -8.4em;
    left: 0%;
    font-size: 3em;
    width: 9em;
    text-align: center;
    font-family: "Barlow";
`;

export { Banner, Espacamento, DivisoriaFoto, FotoBanner, H1Banner, TextoBanner }

import styled from "styled-components";
import banner from '../../../assets/imagensPosGrad/banner.jpg'

export const Container = styled.div`
    background-color: rgb(0, 37, 85);
    width:  100% !important;
`;

export const Imagem = styled.div`
    width: 100% !important;
    height: 600px !important;
    margin: 75px auto 0 auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${banner});
    opacity: 0.5;

    @media screen and (min-width: 768px){
        height: 800px !important;
    }

    @media screen and (min-width: 1224px){
        height: 1000px !important;
    }
`;

export const TituloBanner = styled.h1`
    text-align: center;
    display:flex;
    justify-content: center;
    padding: 30px;
    font-size: 40pt;
    font-family: open sans;
    color: white;
    font-weight: bolder;

    @media screen and (max-width: 768px){
        padding: 10px;
    }
`;

export const TextoBanner = styled.p`
    text-align: center;
    font-size: 24pt;
    font-family: montserrat;
    color: white;
    font-weight: bolder;
    margin-top: 100px;
`;

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
    height: 35.25em;
`;

const FotoBanner = styled.div`
    opacity: 0.30;
`;

const SpanBanner = styled.span`
    position: relative;
    top: -5.7em;
    left: 0%;
    font-weight: bolder;
    font-size: 4.9em;
    color: rgb(255, 255, 255);
`;

const TextoBanner = styled.p`
    color: rgb(255, 255, 255);
    position: relative;
    top: -9.3em;
    left: 0%;
    font-size: 3em;
    width: 9em;
    text-align: center;
`;

const BotaoBusca = styled.button`

`;

const Busca = styled.textarea`
    
`;

export { Banner, Espacamento, DivisoriaFoto, FotoBanner, SpanBanner, TextoBanner, Busca, BotaoBusca }

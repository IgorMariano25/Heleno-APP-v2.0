import imgBanner from "../../assets/imagensGraduacao/bannerGraduacao.png";
import { DivisoriaFoto, Banner, Espacamento, FotoBanner, SpanBanner, TextoBanner, Busca, BotaoBusca } from "./styles";

const Graduacao = () => {
    return (
        <>
        <Espacamento/>
        <DivisoriaFoto/>
        <Banner>
            <FotoBanner>
                <img src={imgBanner}/>
            </FotoBanner>
            <SpanBanner>Graduação</SpanBanner>
            <TextoBanner>Transforme oportunidades em possibilidades</TextoBanner>
        </Banner>
        <BotaoBusca>lupa</BotaoBusca>
        <Busca></Busca>
        </>
    )
}

export default Graduacao;
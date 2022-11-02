import imgBanner from "../../../assets/imagensGraduacao/bannerGraduacao.png";
import { DivisoriaFoto, Banner, Espacamento, FotoBanner, SpanBanner, TextoBanner } from "./styles";

const ExportBanner = () => {
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
        </>
    )
}

export default ExportBanner ;
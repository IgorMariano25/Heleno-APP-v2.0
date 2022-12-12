import imgBanner from "../../../assets/imagensGraduacao/bannerGraduacao.jpg";
import { DivisoriaFoto, Banner, Espacamento, FotoBanner, H1Banner, TextoBanner } from "./styles";

const ExportBanner = () => {
    return (
        <>
        <Espacamento/>
        <DivisoriaFoto/>
        <Banner>
            <FotoBanner src={imgBanner}/>
            <H1Banner>Graduação</H1Banner>
            <TextoBanner>Transforme oportunidades em possibilidades</TextoBanner>
        </Banner>
        </>
    )
}

export default ExportBanner ;
import imgBanner from "../../../assets/imagensSobre/bannerSobre.png";
import { DivisoriaFoto, Banner, Espacamento, FotoBanner, H1Banner, TextoBanner } from "./styledComponents";
import "./estiloBanner.css"

const ExportBanner = () => {
    return (
        <>
        <Espacamento/>
        <DivisoriaFoto/>
        <Banner>
            <FotoBanner src={imgBanner} className={"banner"}/>
            <H1Banner>Sobre</H1Banner>
            <TextoBanner>IBTECH - O projeto desenvolvido por alunosdo ibmec</TextoBanner>
        </Banner>
        </>
    )
}

export default ExportBanner ;
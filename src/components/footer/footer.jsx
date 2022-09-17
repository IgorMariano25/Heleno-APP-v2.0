import { Footer, FooterPagPrincipal, Logo, DivRede, DivLogo, ListaRede, IconeRedeSocial} from "./Style.js";

const RodaPe = ({principal}) => {

    if(principal){
        return(
            <FooterPagPrincipal>
                <DivLogo>
                    <a href={ window.location.href }>
                        <Logo
                        src={ `${process.env.PUBLIC_URL}/imagens/logoIBMECFundoAmarelo.png` }
                        alt={ 'Logo do IBMEC' }
                    /></a>
                </DivLogo>

                <DivRede>
                    <ListaRede>
                        <li>
                            <a href="https://www.instagram.com/ibmec/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={  `${process.env.PUBLIC_URL}/Logo Redes Sociais/Instagram Azul.png` }
                            alt={ `Instagram do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://twitter.com/Ibmec_oficial" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/Twitter Azul.png` }
                            alt={ `Twitter do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/Ibmec/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/Facebook Azul.png` }
                            alt={ `Facebook do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://br.linkedin.com/school/ibmec" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/LinkedIn Azul.png` }
                            alt={ `LinkedIn do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5511988593403" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/WhatsApp Azul.png` }
                            alt={ `WhatsApp do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.ibmec.br/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/Globo Azul.png` }
                            alt={ `Site principal do Ibmec` }
                        /></a>
                        </li>
                    </ListaRede>
                </DivRede>
            </FooterPagPrincipal>
        );
    }
    return(
            <Footer>
                <DivLogo>
                    <a href={ window.location.href }>
                        <Logo
                        src={ `${process.env.PUBLIC_URL}/imagens/logoIBMECFundoAmarelo.png` }
                        alt={ 'Logo do IBMEC' }
                    /></a>
                </DivLogo>

                <DivRede>
                    
                    <ListaRede>
                        <li>
                            <a href="https://www.instagram.com/ibmec/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={  `${process.env.PUBLIC_URL}/Logo Redes Sociais/Instagram Azul.png` }
                            alt={ `Instagram do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://twitter.com/Ibmec_oficial" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/Twitter Azul.png` }
                            alt={ `Twitter do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/Ibmec/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/Facebook Azul.png` }
                            alt={ `Facebook do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://br.linkedin.com/school/ibmec" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/LinkedIn Azul.png` }
                            alt={ `LinkedIn do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5511988593403" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/WhatsApp Azul.png` }
                            alt={ `WhatsApp do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.ibmec.br/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `${process.env.PUBLIC_URL}/Logo Redes Sociais/Globo Azul.png` }
                            alt={ `Site principal do Ibmec` }
                        /></a>
                        </li>
                    </ListaRede>
                </DivRede>
            </Footer>
    );
}

export default RodaPe;
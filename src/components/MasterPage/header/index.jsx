import { Card, Img, Textos } from "./Style.js";
import { useNavigate } from "react-router-dom";
import './ham.css';

/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/

const Topo = ( props ) => {

    function Acessibilidade_educacao(){
        document.getElementById('dropdown-educacao').style.display = 'block';
    }

    const navigate = useNavigate();
    return(
        <nav>
            <Card>
                <a id="acessibilidade" href="/">
                <img    id="logoibmec"
                        src={ `/imagens/logoIBMECFundoAzul.png` }
                        alt={'logo do IBMEC'}
                        onClick={()=>navigate("/")}
                        title="Logo Ibmec"
                />
                </a>
                <div id="menuToggle">
                    <input type="checkbox" class="botao"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="/alunos"><li>Alunos</li></a>
                        <a href="/portfolios"><li>Portfolios</li></a>
                        <a href="/contato"><li>Contato</li></a>
                        <a href="/sobre"><li>Sobre</li></a>
                        <a href="/hubs"><li>Hubs</li></a>
                        <a href="#" id="edu" onClick={Acessibilidade_educacao}><li>Educação</li>
                            <ul id="dropdown-educacao">
                                <a href="/mba">MBA</a>
                                <a href="/pos">Pós</a>
                                <a href="/graduacao">Graduação</a>
                            </ul>
                        </a>
                            <img id="logoibmecmenu"
                                src={ `./imagens/logoIBMECFundoAmarelo.png` }
                                alt={'logo do IBMEC'}
                                onClick={()=>navigate("/")}
                                title="Logo Ibmec"
                            />
                    </ul>
                </div>
            </Card>
        </nav>
    );
}

/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/

export default Topo;

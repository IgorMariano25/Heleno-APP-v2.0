import { Card, Img, Textos } from "./Style.js";
import { useNavigate } from "react-router-dom";
import './ham.css';


const Topo = ( props ) => {
    const navigate = useNavigate();    
    return(
        <nav>
        
        <Card>
            <img    id="logoibmec"
                    src={ `./imagens/logoIBMECFundoAzul.png` }
                    alt={'logo do IBMEC'}
                    onClick={()=>navigate("/")}
            />
            <div id="menuToggle">
                <input type="checkbox" class="botao" onClick="change()" />
                <span></span>
                <span></span>
                <span></span>
                    
                        <ul id="menu">
                            <a href="/alunos"><li>Alunos</li></a>
                            <a href="/contato"><li>Contato</li></a>
                            <a href="/sobre"><li>Sobre</li></a>
                            <a href="/portifolios"><li>Portifolios</li></a>
                            <img id="logoibmecmenu"
                                 src={ `./imagens/logoIBMECFundoAmarelo.png` }
                                 alt={'logo do IBMEC'}
                                 onClick={()=>navigate("/")}
                                />
                        </ul>
                    
            </div>
        </Card>
        </nav>
    );
}

export default Topo;
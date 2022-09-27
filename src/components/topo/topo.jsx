import { Card, Img, Textos } from "./Style.js";
import { useNavigate } from "react-router-dom";
import './ham.css';


const Topo = ( props ) => {
    const navigate = useNavigate();    
    return(
        <nav>
        
        <Card>
            <Img
                    src={ `./imagens/logoIBMECFundoAzul.png` }
                    alt={'logo do IBMEC'}
                    onClick={()=>navigate("/")}
            />
            <div id="menuToggle">
                <input type="checkbox" class="botao" />
                <span></span>
                <span></span>
                <span></span>
                    
                        <ul id="menu">
                            <a href="/alunos"><li>Alunos</li></a>
                            <a href="/contato"><li>Contato</li></a>
                            <a href="/sobre"><li>Sobre</li></a>
                            <a href="/portifolios"><li>Portifolios</li></a>
                        </ul>
                    
            </div>
        </Card>
        </nav>
    );
}

export default Topo;
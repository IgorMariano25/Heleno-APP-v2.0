<<<<<<< HEAD
import { Card, Img, Textos } from "./styles.js";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
=======
<<<<<<< HEAD:src/components/topo/topo.jsx
import { Card, Img, Textos } from "./Style.js";
=======
import { Card, Img, Textos } from "./styles.js";
import {Link} from 'react-router-dom';
>>>>>>> release:src/components/MasterPage/header/index.jsx
import { useNavigate } from "react-router-dom";
import './ham.css';

/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/
>>>>>>> release

<<<<<<< HEAD:src/components/Home/topo/index.jsx
const Topo = ( props ) => {
=======
export default function App(props){
>>>>>>> release:src/components/MasterPage/header/index.jsx
    const navigate = useNavigate();    
    return(
        <nav>
<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/topo/topo.jsx
            <Card>
                <img    id="logoibmec"
                        src={ `./imagens/logoIBMECFundoAzul.png` }
                        alt={'logo do IBMEC'}
                        onClick={()=>navigate("/")}
                />
                <div id="menuToggle">
                    <input type="checkbox" class="botao"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="/alunos"><li>Alunos</li></a>
                        <a href="/contato"><li>Contato</li></a>
                        <a href="/sobre"><li>Sobre</li></a>
                        <a href="/portifolios"><li>Portifolios</li></a>
                        <a id="bunda"><li>Educação</li>
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
                        />
                    </ul>   
                </div>
            </Card>
=======
>>>>>>> release
        <Card>
            <Img
                    src={ `${process.env.PUBLIC_URL}/imagens/logoIBMECFundoAzul.png` }
                    alt={'logo do IBMEC'}
                    onClick={()=>navigate("/")}
            />
            <Textos>
                <Link to="/portfolios">Portfólios</Link>
                <Link to="/alunos">Alunos</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/sobre">Sobre</Link>
                <span>Educação
                    <ul id="dropdown-educacao">
                        <li><Link to="/mba">MBA</Link></li>
                        <li><Link to="/pos">Pós</Link></li>
                        <li><Link to="/graduacao">Graduação</Link></li>
                    </ul>
                </span>
                
            </Textos>
        </Card>
<<<<<<< HEAD
=======
>>>>>>> release:src/components/MasterPage/header/index.jsx
>>>>>>> release
        </nav>
    );
<<<<<<< HEAD:src/components/Home/topo/index.jsx
}

<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/topo/topo.jsx
/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/
/*Created and developed exclusively by William Fagundes*/

export default Topo;
=======
>>>>>>> release
export default Topo;
=======
}
>>>>>>> release:src/components/MasterPage/header/index.jsx
<<<<<<< HEAD
=======
>>>>>>> release:src/components/MasterPage/header/index.jsx
>>>>>>> release

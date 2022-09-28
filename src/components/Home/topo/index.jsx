import { Card, Img, Textos } from "./styles.js";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Topo = ( props ) => {
    const navigate = useNavigate();    
    return(
        <nav>
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
        </nav>
    );
}

export default Topo;

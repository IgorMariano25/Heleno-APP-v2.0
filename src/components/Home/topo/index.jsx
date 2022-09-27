import { Card, Img, Textos } from "./Style.js";
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
            </Textos>
        </Card>
        </nav>
    );
}

export default Topo;

import React from "react";
import { Card, Img, Textos } from "./styles.js";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function App(props){
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
                    <ul>
                        <li><Link to="/portfolios">Portfólios</Link></li>
                        <li><Link to="/alunos">Alunos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li id="li-educacao">Educação
                            <ul id="menu-educacao">
                                <li><Link to="/mba">MBA</Link></li>
                                <li><Link to="/pos">Pós</Link></li>
                                <li><Link to="/graduacao">Graduação</Link></li>
                            </ul>
                        </li>
                    </ul>
                    
                    
                </Textos>
            </Card>
        </nav>
    );
}
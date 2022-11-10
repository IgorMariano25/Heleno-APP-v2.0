import { Card, Textos, Img, Título, Tecnologias, Participantes } from "./styles";
import { useNavigate } from "react-router-dom";

export default function App(props){
    const navigate = useNavigate();
    return (
        <Card onClick={()=>navigate(`/portfolios/${props.ID}`)}>
            <Img 
            src= { `imagens_projetos/${props.fotoProjeto}` }
            alt={props.título}
            />
            <Textos>
                <Título> {props.titulo} </Título>
                <Tecnologias>{ props.tecnologias} </Tecnologias>
                <Participantes>{ props.participantes} </Participantes>
            </Textos>
        </Card>
    )
}

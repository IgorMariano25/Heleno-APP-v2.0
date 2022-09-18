import { Card, Textos, Nome , Img, Curso} from "./styles";
import { useNavigate } from "react-router-dom";

export default function App(props) {
    const navigate = useNavigate();
    return (  
            <Card onClick={()=>navigate(`/alunos/${props.ID}`)}>
                <Img
                src= { `imagens/${props.imagem}` }
                alt={props.nome}
                />
            <Textos>
                <Nome> {props.nome} </Nome>
                <Curso>{ props.curso} </Curso>
            </Textos>
        </Card> 
    )
}

import { Card, Textos, Nome , Img, Curso} from "./styles";
import { useNavigate } from "react-router-dom";


export default function App(props) {
    const navigate = useNavigate();
    return (
        <Card onClick={()=>navigate(`/graduacao/${props.ID}`)}>
            <Textos>
                <Nome> {props.nome} </Nome>
                <Curso>{ props.curso} </Curso>
                <Curso>{ props.duracao} </Curso>
            </Textos>
        </Card>
    )
}
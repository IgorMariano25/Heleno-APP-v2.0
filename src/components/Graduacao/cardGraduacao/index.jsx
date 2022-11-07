import { Card, Textos, Nome, Curso} from "./styles";
import { useNavigate } from "react-router-dom";



export default function App(props) {
    const navigate = useNavigate();
    return (
        <Card onClick={()=>navigate(`/graduacao/${props.ID}`)}>
            <Textos>
                <Nome> { props.nome } </Nome>
                <Curso>{ props.curso } </Curso>
                <Curso>{ props.duracao } </Curso>
                <Curso>{ props.tipo } </Curso>
                <Curso>{ props.categoria } </Curso>
            </Textos>
        </Card>
    )
}
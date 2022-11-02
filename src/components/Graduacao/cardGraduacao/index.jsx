import { Card, Textos, Nome, Duracao, Tipo, Categoria} from "./styles";
import { useNavigate } from "react-router-dom";

export default function App(props) {
    const navigate = useNavigate();
    return (
        <Card onClick={()=>navigate(`/graduacao/${props.ID}`)}>
            <Textos>
                <Nome> { props.nome } </Nome>
                <Duracao>{ props.duracao } </Duracao>
                <Tipo>{ props.tipo }</Tipo>
                <Categoria>{ props.categoria }</Categoria>
            </Textos>
        </Card>
    )
}
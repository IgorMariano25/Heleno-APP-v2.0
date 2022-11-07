import { Card, Textos, Nome, Curso} from "./styles";



export default function App(props) {
    return(
        <a href={`${props.ID}`}>
        <Card>
            <Textos>
                <Nome> { props.nome } </Nome>
                <Curso>{ props.curso } </Curso>
                <Curso>{ props.duracao } </Curso>
                <Curso>{ props.tipo } </Curso>
                <Curso>{ props.categoria } </Curso>
            </Textos>
        </Card>
        </a>
    )
}
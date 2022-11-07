import { Card, Textos, Nome, Curso, Icone, Linha} from "./styles";
import { TbCertificate, TbClock } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";


export default function App(props) {
    return(
        <a href={`${props.ID}`}>
        <Card>
            <Textos>
                <Nome> { props.nome } </Nome>

                    <Icone><TbClock/></Icone>
                    <Curso> { props.duracao } </Curso>

                    <Icone><TbCertificate/></Icone>
                    <Curso> { props.tipo } </Curso>

                    <Icone><BiMoviePlay/></Icone>
                    <Curso> { props.categoria } </Curso>

            </Textos>
        </Card>
        </a>
    )
}
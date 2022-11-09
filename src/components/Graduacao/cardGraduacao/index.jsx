import { Card, CaixaTextos, Nome, Curso, Icone, CaixaGrid, Grid } from "./styles";
import { TbCertificate, TbClock } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";


export default function App(props) {
    return(
        <a href={`${props.link}`} target={`_blanck`}>
        <Card>
            <CaixaTextos>
                <Nome> { props.nome } </Nome>
                <CaixaGrid>
                    <Grid>
                        <Icone><TbClock/></Icone>
                        <Curso> { props.duracao } </Curso>
                        <Icone><TbCertificate/></Icone>
                        <Curso> { props.tipo } </Curso>
                        <Icone><BiMoviePlay/></Icone>
                        <Curso> { props.categoria } </Curso>
                    </Grid>
                </CaixaGrid>
            </CaixaTextos>
        </Card>
        </a>
    )
}
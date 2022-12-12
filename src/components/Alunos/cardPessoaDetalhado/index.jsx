import { CardDetalhado, Textos, Nome, Img, Curso, Bio, Ingresso, PrevFormatura, Projetos} from "./styles";
import "./estillo.css"

export default function App(props) {
    return (
            <CardDetalhado>
                <div class="wrap">
                    <div class="imagem">
                        <Img
                        src= { `${process.env.PUBLIC_URL}/imagens/${props.imagem}` }
                        //src = {props.nome}
                        alt= {props.nome}
                        />
                    </div>
                    <div class="caixa_textos">
                        <Textos>
                            <Nome> {props.nome}</Nome>
                            <Curso> {props.curso}</Curso>
                            <Ingresso> {props.ingresso} </Ingresso>
                            <PrevFormatura> {props.formacao}</PrevFormatura>
                            <Bio> {props.bio}</Bio>
                            <Projetos> {props.projetos} </Projetos>
                        </Textos>
                    </div>
                </div>
                <div class="branco"></div>
            </CardDetalhado>
    )
}

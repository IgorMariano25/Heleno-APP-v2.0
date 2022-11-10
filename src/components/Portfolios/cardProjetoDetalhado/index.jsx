import { Card, Textos, Img, Título, Tecnologias, Participantes } from "./styles";

export default function App(props){
    return (
        <Card>
            <Img
            src= { `${process.env.PUBLIC_URL}/imagens_projetos/${props.fotoProjeto}` }
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

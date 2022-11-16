import {Card, Imagem,Titulo, Descricao} from './styles.js';

export default function App(props){
    return(
        <Card>
            <Imagem>{props.imagem}</Imagem>
            <Titulo>{props.titulo}</Titulo>
            <Descricao>{props.descricao}</Descricao>
        </Card>
    )
}
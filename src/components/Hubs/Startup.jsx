import React from 'react';
import { Conteudo, Texto, Img, Card, Link} from "./styles";


export default function App(props) {
    return (
        <Link href={`${props.link}`} target={`_blank`}>
        <Card>
            <Img
                src={ `imagens/${props.imagem}`}
                alt={props.nome}
            />
            <Conteudo>
                <Texto>{props.texto}</Texto>
            </Conteudo>
        </Card>
        </Link>
    );
}
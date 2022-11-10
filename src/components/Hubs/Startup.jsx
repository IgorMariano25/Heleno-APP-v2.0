import React from 'react';
import { Conteudo, Texto, Img, Card} from "./styles";


export default function App(props) {
    return (
        <Card>
            <Img
                src={ `imagens/${props.imagem}`}
                alt={props.nome}
            />
            <Conteudo>
                <Texto>{props.texto}</Texto>
            </Conteudo>
        </Card>
    );
}
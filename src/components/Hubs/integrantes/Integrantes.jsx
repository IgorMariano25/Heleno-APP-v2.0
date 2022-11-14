import React from 'react';
import { Conteudo, Img, Card, Nome, Texto } from "./styles";

export default function App(props) {
    return (
        <Card>
            <Img
                src={ `imagens/${props.imagem}`}
                alt={props.nome}
            />
            <Conteudo>
                <Nome>{props.nome}</Nome>
                <Texto>{props.texto}</Texto>
            </Conteudo>
        </Card>
    );
}

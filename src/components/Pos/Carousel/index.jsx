import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import image2 from '../../../assets/imagensPosGrad/pos_1.jpg'
import image3 from '../../../assets/imagensPosGrad/pos_2.jpg'
import image4 from '../../../assets/imagensPosGrad/pos_3.jpg'
import { hover } from "@testing-library/user-event/dist/hover";
import dados from "../cursosPos.json"


export default function App(){

    const images = [image2, image3, image4];

    return (
        <Carousel pause={"hover"} className="carousel-container" indicators={false} variant={"dark"}>
            {
                dados.map( (p, ind) => (
                    <Carousel.Item
                    key={ind}
                    interval={200000}>
                        <img
                            className="img-carousel rounded mx-auto d-block m-5"
                            src={images[parseInt((Math.random() * (images.length - 1 - 0 + 1)) + 0)]}
                            alt="Primeiro Curso"
                        />
                        <Carousel.Caption className="d-block h-75 w-75 text-black text-center">
                            <h4 className="titulo-curso">Nome: {p.nome}</h4>
                            <p className="descricao-curso">Tipo: {p.tipo}</p>
                            <p className="descricao-curso">Duração: {p.duracao}</p>
                            <p className="descricao-curso">Categoria: {p.categoria}</p>
                            <a className="link-curso" href={p.link}>Sobre o curso</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }

        </Carousel>
    )
}

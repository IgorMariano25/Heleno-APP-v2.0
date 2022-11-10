import React from "react";
import { Carousel } from "react-bootstrap";
import image2 from '../../../assets/imagensPosGrad/pos_1.jpg'
import image3 from '../../../assets/imagensPosGrad/pos_2.jpg'
import image4 from '../../../assets/imagensPosGrad/pos_3.jpg'
import { hover } from "@testing-library/user-event/dist/hover";



export default function App(){
    return (

        <Carousel pause={"hover"} className="carousel-container" indicators={false} variant={"dark"}>
            <Carousel.Item interval={200000}>
                <img
                    className="rounded mx-auto d-block w-75 m-5"
                    src={image4}
                    alt="Primeiro Curso"
                />
                <Carousel.Caption className="d-block h-50 w-75 text-black">
                    <h3>Pós em Economia</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="rounded mx-auto d-block w-75 m-5"
                    src={image3}
                    alt="Segundo Curso"
                />
                <Carousel.Caption className="d-block h-50 w-75 text-black">
                    <h3>Pós em Direito</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="rounded mx-auto d-block w-75 m-5"
                    src={image2}
                    alt="Terceiro Curso"
                />
                <Carousel.Caption className="d-block h-50 w-75 text-black">
                    <h3>Pós em Engenharia</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

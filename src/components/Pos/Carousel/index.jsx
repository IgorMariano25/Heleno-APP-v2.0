import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../../../assets/imagens/avatar.png'
import image2 from '../../../assets/imagens/pos_1.jpg'
import image3 from '../../../assets/imagens/pos_2.jpg'
import image4 from '../../../assets/imagens/pos_3.jpg'
import { hover } from "@testing-library/user-event/dist/hover";

export default function App(){
    return (
        <Carousel pause={"hover"} className="carousel-container">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-50"
                    src={image4}
                    alt="Primeiro Curso"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-50"
                    src={image3}
                    alt="Segundo Curso"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-50"
                    src={image2}
                    alt="Terceiro Curso"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-50"
                    src={image1}
                    alt="Quarto Curso"
                />
                <Carousel.Caption>
                    <h3>Quarto Curso</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../../../assets/imagens/avatar.png'
import image2 from '../../../assets/imagens/pos_1.jpg'
import image3 from '../../../assets/imagens/pos_2.jpg'
import image4 from '../../../assets/imagens/pos_3.jpg'
import { hover } from "@testing-library/user-event/dist/hover";



export default function App(){
    return (
           
        <Carousel pause={"hover"} className="carousel-container" indicators={false} variant={"dark"}>
            <Carousel.Item interval={200000}>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="Primeiro Curso"
                />
                <Carousel.Caption className="d-block h-50 w-75 text-black">
                    <h3>MBA em Economia</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br>Porro dolores tenetur hic cum odio quae esse, dolorum neque quo, dicta optio ullam eligendi?<br></br> Itaque architecto fuga quia qui in adipisci.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Segundo Curso"
                />
                <Carousel.Caption className="d-block h-50 w-75 text-black">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic soluta ut mollitia iste iusto nemo atque aliquid totam? Id provident atque suscipit inventore nihil maxime, autem omnis praesentium porro?</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Terceiro Curso"
                />
                <Carousel.Caption className="d-block h-50 w-75 text-black">
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

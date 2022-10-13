import { useState } from "react";
import { Card, Textos, Nome , Img, Curso} from "./styles";
import { useNavigate } from "react-router-dom";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

export default function App(props) {
    const navigate = useNavigate();

    // pensando na possibilidade de abrir um modal ao clicar no card;

    // const [modalIsOpen, setIsOpen] = useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }

    // function modalCard() {
    //     return (
    //         <div className="Container">
    //         <button onClick={openModal}>Open Modal</button>
    //         <Modal
    //             isOpen={modalIsOpen}
    //             onRequestClose={closeModal}
    //             contentLabel="Example Modal"
    //             overlayClassName="modal-overlay"
    //             className="modal-content"
    //         >
    //             <h2>Hello - I am a modal!</h2>
    //             <hr />
    //             <p>
    //             We maintain that accessibility is a key component of any modern web
    //             application. As such, we have created this modal in such a way that it
    //             fulfills the accessibility requirements of the modern web. We seek to
    //             keep the focus on accessibility while providing a functional, capable
    //             modal component for general use.
    //             </p>
    //             <button onClick={closeModal}>Close</button>
    //         </Modal>
    //         </div>
    //     );
    // }

    return (  
        <Card onClick={()=>navigate(`/alunos/${props.ID}`)}>
            <Img
            src= { `imagens/${props.imagem}` }
            alt={props.nome}
            />
            <Textos>
                <Nome> {props.nome} </Nome>
                <Curso>{ props.curso} </Curso>
            </Textos>
        </Card> 
    )
}
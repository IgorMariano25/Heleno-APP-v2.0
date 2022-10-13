import { Titulo, Informacoes, Subtitulo, Form, BoxFormulario, Botao } from "./styles.js";

const Formulario = ( props ) => {

    const enviado = (event) => {
        event.preventDefault();
        alert(`Funcionalidade ainda não implementada :(!`);
    }

    return (

        <div>
            <Informacoes>
                <Titulo>
                    <h1> Quer saber mais?<br/>
                    <Subtitulo>
                        <span>Fale conosco!</span>
                    </Subtitulo>
                    </h1>
                </Titulo>
                <BoxFormulario>
                    <Form type="text"
                    placeholder="Nome"
                    />
                    <Form
                    type="text" 
                    placeholder="E-mail"  
                    />
                    <Form
                    type="textarea" 
                    placeholder="Sua mensagem"
                    />
                    <Botao onClick={enviado}>
                    Enviar
                    </Botao>
                </BoxFormulario>
            </Informacoes>
        </div>
    );
}

export default Formulario;
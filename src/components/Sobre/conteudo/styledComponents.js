import styled from "styled-components";

const DescricaoSobre = styled.h2`
    text-align: left;
`;

const ContainerDescricao = styled.div`
    background-color: rgb(0, 37, 85);
    padding: 30px;
    padding-right: 5em;
    margin: 0px;
    color: rgb(245, 172, 20);
`;

const ListaAlunos = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 20px;
    margin: 0px;
    font-size: 25px;
    font-family: "Barlow";
    font-weight: bold;
    color: rgb(0, 37, 85);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const ListaSemPonto = styled.ul`
    list-style-type: none;
`;

const ContainerBotoes = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const BotaoDocumentacao = styled.a`
    .botaoDocumentacao {
        color:rgb(0, 37, 85);
        padding: 1.3em 3em;
        font-size: 12px;
        font-style: bold;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 1000;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
        margin-top: 2em;
    }

    &:hover .botaoDocumentacao{
        background-color: #F5AC0D;
        box-shadow: 0px 15px 20px #997323;
        color: #000;
        transform: translateY(-7px);
    }

    &:active .botaoDocumentacao {
        transform: translateY(-1px);
    }
`;


const ImgBotoes = styled.img`
    width: 100%;
    border-radius: 5%;
    height:350px;
`;

export { DescricaoSobre, ContainerDescricao, ListaAlunos, ListaSemPonto, ContainerBotoes, BotaoDocumentacao, ImgBotoes }

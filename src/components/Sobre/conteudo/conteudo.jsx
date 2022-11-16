import fotoTurmaAntiga from "../../../assets/imagensSobre/fotoTurmaAntiga.jpg"
import fotoTurmaNova from "../../../assets/imagensSobre/fotoTurmaNova.jpg"
import { DescricaoSobre, ContainerDescricao, ListaAlunos, ListaSemPonto, ContainerBotoes, BotaoDocumentacao, ImgBotoes } from "./styledComponents"

const Sobre = () => {
    return (
        <>
        <ContainerDescricao>
            <DescricaoSobre>
                O Projeto ibtech originou-se como o projeto semestral dos alunos de Análise e Desenvolvimento de Sistemas do Ibmec-Barra, dirigido e direcionado pelo professor <i>Eduardo Mangeli</i>,
                visando facilitar a apresentação dos projetos feitos pelos alunos da instituição Ibmec nos cursos de tecnologia,
                tendo como base a apresentação de portifólios dos alunos bem como os resultados alcançados por eles.<br></br>
                <br></br>
                O Projeto proporcionou aos alunos uma experiência que se aproximasse ao nível que o mercado requere atualmente. Além disso, para que chegassem ao produto proposto, se exigiu uma série de desafios dos alunos, dos quais eles tiveram que se organizar entre si e trabalhar de maneira conjunta e uniforme. Nele, eles puderam desenvolver diversas habilidades necessárias dentro de um ambiente empresarial, como a comunicação, organização, resolução de problemas, resiliência, o trabalho em equipe, e principalmente a evolução e familiarização com as bibliotecas e linguagens de programação front-end utilizadas dentro do desenvolvimento do projeto tais quais, o HTML, CSS, Javascript, React, JSX e JSON.
            </DescricaoSobre>
        </ContainerDescricao>
        <ListaAlunos>
            <ul className='AlunosAntigos'>
                <h3>Criado inicialmente por:</h3>
                <ListaSemPonto>Ghuilherme Félix</ListaSemPonto>
                <ListaSemPonto>Igor Mariano</ListaSemPonto>
                <ListaSemPonto>Felipe Castelhano</ListaSemPonto>
                <ListaSemPonto>Clarissa Proença</ListaSemPonto>
            </ul>

            <ul className='AlunosNovos'>
                <h3>Assumido após por:</h3>
                <ListaSemPonto>Amanda Senra</ListaSemPonto>
                <ListaSemPonto>Augusto Amorim</ListaSemPonto>
                <ListaSemPonto>Beatriz Moura</ListaSemPonto>
                <ListaSemPonto>Caio da luz</ListaSemPonto>
                <ListaSemPonto>Gabriel Espósito</ListaSemPonto>
                <ListaSemPonto>Gabriel Martinez</ListaSemPonto>
                <ListaSemPonto>Gabriel Oscar</ListaSemPonto>
                <ListaSemPonto>Guilherme Maia</ListaSemPonto>
                <ListaSemPonto>Ilidio</ListaSemPonto>
                <ListaSemPonto>João Curvelho</ListaSemPonto>
                <ListaSemPonto>João Pedro Constant</ListaSemPonto>
                <ListaSemPonto>João Pedro Correia</ListaSemPonto>
                <ListaSemPonto>Leonardo Campello</ListaSemPonto>
                <ListaSemPonto>Maria Giulia</ListaSemPonto>
                <ListaSemPonto>Matheus Herzog</ListaSemPonto>
                <ListaSemPonto>Pedro Reis</ListaSemPonto>
                <ListaSemPonto>Rafael Neiva</ListaSemPonto>
                <ListaSemPonto>Raphael Meres</ListaSemPonto>
                <ListaSemPonto>Thaís Bustamante</ListaSemPonto>
                <ListaSemPonto>Théo Furtado</ListaSemPonto>
                <ListaSemPonto>Victor Hugo Rocha</ListaSemPonto>
                <ListaSemPonto>Vitor Lobianco</ListaSemPonto>
                <ListaSemPonto>William Fagundes</ListaSemPonto>
            </ul>
        </ListaAlunos>
        <ContainerBotoes className={"containerBotoesSobre"}>
            <BotaoDocumentacao href="https://gitlab.com/projeto-multidisciplinar/heleno-app" target="_blank" rel="noreferrer">
                <button className="botaoDocumentacao">
                    <ImgBotoes src={fotoTurmaAntiga}></ImgBotoes>
                    <label>Documentação Nova</label>
                </button>
            </BotaoDocumentacao>
            <BotaoDocumentacao href="https://gitlab.com/EduardoMangeli/ibtech" target="_blank" rel="noreferrer">
                <button className="botaoDocumentacao">
                    <ImgBotoes src={fotoTurmaNova}></ImgBotoes>
                    <label>Documentação Nova</label>
                </button>
            </BotaoDocumentacao>
        </ContainerBotoes>
        </>
    )
}

export default Sobre;
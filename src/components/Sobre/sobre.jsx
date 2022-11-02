import fotoTurmaAntiga from "../../assets/imagensSobre/fotoTurmaAntiga.jpg"
import fotoTurmaNova from "../../assets/imagensSobre/fotoTurmaNova.jpg"
import "./styles.css"

const Sobre = () => {
    return (
    <div>
        <div className="containerDescricao">
            <h2 className="TituloSobre">
                <p>Criado inicialmente por Guilherme Félix, Igor Mariano, Felipe Castelhano e Clarissa Proença.</p>

                Assumido após por Victor Hugo Rocha, Amanda Senra, Matheus Herzog, William Fagundes, Caio da luz, Gabriel Espósito,<br/> Guilherme Maia, Ilidio , João Victor Meirelles, João Pedro Constant, Leonardo Campello, Maria Giulia, Pedro Reis, Augusto Amorim, Thaís Bustamante, Gabriel Oscar, Vitor Lobianco, Raphael Meres, João Curvelho, Théo Furtado, Rafael Neiva, Beatriz Moura, Gabriel Martinez e João Pedro Correia.
            </h2>
            <h2 className="TituloSobre">
                O Projeto ibtech originou-se como o projeto semestral dos alunos de Análise e Desenvolvimento de Sistemas do Ibmec-Barra, dirigido e direcionado pelo professor <i>Eduardo Mangeli</i>,
                visando facilitar a apresentação dos projetos feitos pelos alunos da instituição Ibmec nos cursos de tecnologia,
                tendo como base a apresentação de portifólios dos alunos bem como os resultados alcançados por eles.
            </h2>
        </div>
        <div className="ImagensGrupos">
            <a href="https://gitlab.com/projeto-multidisciplinar/heleno-app" target="_blank" rel="noreferrer">
            <button className="btnImagem">
            <img src={fotoTurmaAntiga} className="imagem"/>
                        Antiga Documentação
                </button>
            </a>
            <a href="https://gitlab.com/EduardoMangeli/ibtech" target="_blank" rel="noreferrer">
                <button className="btnImagem">
                    <img src={fotoTurmaNova}  className="imagem"/>
                    Nova Documentação
                </button>
            </a>
        </div>
    </div>
    )
}

export default Sobre;
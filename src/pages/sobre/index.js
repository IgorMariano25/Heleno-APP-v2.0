import Master from '../masterPage'
import { Conteudo } from "../../components/Sobre/styledComponents";
import Sobre from '../../components/Sobre/sobre';

export default function App(){

    return (

        <Master tipoFooter="tipo3">
            <Conteudo>
                <div>

                        <div id='bannerSobre'>
                        <div id='fundoAzul'>
                            </div>
                            <h1 id='sobre' className='sobreTitulo'>
                                Sobre
                            </h1>
                            <p id='descricaoSobre' className='sobreTitulo'>
                                IBTECH - O projeto desenvolvido por alunos do IBMEC
                            </p>

                    </div>
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
                     <div className='ListaAlunos'>
                        <ul className='AlunosAntigos'>
                            <h3>Criado inicialmente por:</h3>
                            <li>Ghuilherme Félix</li>
                            <li>Igor Mariano</li>
                            <li>Felipe Castelhano</li>
                            <li>Clarissa Proença</li>
                        </ul>
                        <ul className='AlunosNovos'>
                            <h3>Assumido após por:</h3>
                            <li>Amanda Senra</li>
                            <li>Augusto Amorim</li>
                            <li>Beatriz Moura</li>
                            <li>Caio da luz</li>
                            <li>Gabriel Espósito</li>
                            <li>Gabriel Martinez</li>
                            <li>Gabriel Oscar</li>
                            <li>Guilherme Maia</li>
                            <li>Ilidio</li>
                            <li>João Curvelho</li>
                            <li>João Pedro Constant</li>
                            <li>João Pedro Correia</li>
                            <li>Leonardo Campello</li>
                            <li>Maria Giulia</li>
                            <li>Matheus Herzog</li>
                            <li>Pedro Reis</li>
                            <li>Rafael Neiva</li>
                            <li>Raphael Meres</li>
                            <li>Thaís Bustamante</li>
                            <li>Théo Furtado</li>
                            <li>Victor Hugo Rocha</li>
                            <li>Vitor Lobianco</li>
                            <li>William Fagundes</li>
                        </ul>
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
                                <img src={fotoTurmaAntiga}  className="imagem"/>
                                Nova Documentação
                            </button>
                        </a>
                    </div>
                </div>

            </Conteudo>
        </Master>
    );
}
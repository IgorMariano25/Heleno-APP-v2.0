import Topo from "../../components/Sobre/topo";
import RodaPe from "../../components/Sobre/footer";
import { Conteudo } from "../../components/Sobre/styledComponents";
import fotoTurmaAntiga from "../../assets/imagens/fotoTurmaAntiga.jpg"
import "./styles.css"

export default function App(){
    return (
        <div className="containerSobre">
            <Topo/>
            <Conteudo>
                <div>
                    <div className="ImagensGrupos">
                        <a href="https://gitlab.com/projeto-multidisciplinar/heleno-app" target="_blank" rel="noreferrer">
                            <button className="btnImagem">
                                <img src={fotoTurmaAntiga} className="imagem"/>
                                {/*Ver documentação antiga*/}
                            </button>
                        </a>
                        <a href="https://gitlab.com/projeto-multidisciplinar/heleno-app" target="_blank" rel="noreferrer">
                            <button className="btnImagem">
                                <img src={fotoTurmaAntiga}  className="imagem"/>
                                {/*Ver documentação antiga*/}
                            </button>
                        </a>     
                    </div>    

                    <div className="containerDescricao">
                        <h2 className="TituloSobre">
                            Criado por Guilherme Félix, Igor Mariano, Felipe Castelhano e Clarissa Proença.
                        </h2>
                        <h2 className="TituloSobre">
                            O Projeto Heleno originou-se como um trabalho eletivo de Desenvolvimento Web, matéria curricular dos alunos em Análise e desenvolvimento de sistemas e dirigida por <i>Eduardo Mangeli</i>,
                            visando facilitar a apresentação dos projetos feitos pelos alunos da instituição Ibmec nos cursos de tecnologia, 
                            tendo como base a apresentação de portifólios dos alunos bem como os resultados alcançados por eles.
                        </h2>
                        <h3 className="InfoSobre">
                            Para saber mais sobre a documentação, clique aqui e veja o repositório Git.
                        </h3>
                    </div>
                </div>
                
            </Conteudo>
            <RodaPe/>
        </div>
    );
}

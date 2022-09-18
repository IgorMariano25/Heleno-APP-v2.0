import Topo from "../../components/Sobre/topo";
import RodaPe from "../../components/Sobre/footer";
import { Conteudo } from "../../components/Sobre/styledComponents";

export default function App(){
    return (
        <div>
            <Topo/>
            <Conteudo>
                <div>
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
                        <div className="AlinhamentoBtnSobre">
                            <a href="https://gitlab.com/projeto-multidisciplinar/heleno-app" target="_blank" rel="noreferrer">
                                <button id="DocumentacaoBtn">
                                    Ver documentação
                                </button>
                            </a>    
                        </div>    
                </div>
                
            </Conteudo>
            <RodaPe/>
        </div>
    );
}

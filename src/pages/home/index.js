import './styles.css';
import Master from '../masterPage'
import { ConteudoPage, Titulo, P, SubTitulo} from '../../components/Home/styledComponents';
import ProjetoCard from '../../components/Home/cardProjeto';
import projetos from '../../projetos.json';
import PessoaCard from '../../components/Home/cardPessoa';
<<<<<<< HEAD
import dados from '../../pessoas.json'
=======
import dados from '../../AlunosHome.json'
>>>>>>> release

export default function App() {
  return (

    <Master>
       <ConteudoPage>
          <div className="IntroducaoHomePage">
            <div className="VideoIbmecHome">
              <iframe
                  src="https://www.youtube.com/embed/L5hCvZk5MZE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            <div className="ConteudoTextosHome">
              <Titulo>Portifólio de projetos dos alunos dos cursos de Tecnologia do IBMEC-RJ</Titulo>
              <P>
                Os alunos Igor Mariano, Clarissa Proença, Guilherme Felix e Felipe Castelhano do 1º curso de Full-Stack do Ibmec Centro-RJ, são os desenvolvedores responsáveis por codificar o site que vocês estão visualizando nesse exato momento.
                E isso só foi possível graças ao empenho deses alunos e também pela orientação dos professores de excelência que a nossa instituição provê.
                <br></br>
                <br></br>
                No Ibmec, nós damos voz para os alunos e os auxiliamos com toda e qualquer dificuldade, além de estimular a criatividade e a elaboração de projetos e startups. Nós do Ibmec visamos criar, não somente alunos, mas líderes para o futuro.



              </P>
            </div>
          </div>

            <div className="AlinhamentoAlunosProjetos">
                <div className='SubTituloProjetosHome'>
                    <SubTitulo>Conheça alguns projetos dos alunos</SubTitulo>
                </div>

              <div className="ProjetoAlunosHome">
                <div className="ContainerCardProjetos">
                  {
                          projetos.map( (p, ind) => (
                              <ProjetoCard
                                      key = { ind }
                                      fotoProjeto = {p.fotoProjeto}
                                      titulo = {p.titulo}
                                      tecnologias = {p.tecnologias}
                                      participantes = {p.participantes}
                                      ID = {p.ID}
                              />
                          ))
                      }
                </div>
              </div>

              <div className='SubTituloAlunosHome'>
                    <SubTitulo>Conheça os alunos destaque do IBMEC</SubTitulo>
                </div>

                <div className="ContainerCardAlunos">
                {
                        dados.map( (p, ind) => (
                            <PessoaCard
                                    key = { ind }
                                    imagem = {p.imagem}
                                    nome = {p.nome}
                                    curso = {p.curso}
                                    ID = {p.ID}
                            />
                        ))
                    }
              </div>
        </div>
        </ConteudoPage>
    </Master>
  );
}

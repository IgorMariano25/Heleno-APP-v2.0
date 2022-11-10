import React from 'react'
import hubs from '../../assets/hubsimg.png'
import { useState} from "react";
import hubsEstrutura from '../../assets/hubs_ibmec_rio.jpg'
import Master from '../masterPage'
import {PrimeiraSection, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista, TituloImagem, Container, SegundaSection, Botao, 
    SectionNoticia, PrimeiraNoticia, TextoNoticia, SegundaNoticia, Texto2, ImgDiv, TerceiraSection} from './style';
import arquivo from '../../startups.json'
import Startup from '../../components/Hubs/Startup';
import noticia1 from '../../assets/imagens/destaques.jpg';
import noticia2 from '../../assets/imagens/noticia.jpg';


export default function Hubs(){
    const [dados, setDados] = useState(arquivo);

    return(
        <Master> 
            
            <Container>
                <PrimeiraSection />
                <TituloImagem>CONECTANDO EMPRESAS EM BUSCA DE INOVAÇÃO A EMPREENDEDORES E SUAS SOLUÇÕES.</TituloImagem>
            </Container>
            
           

             
            <Conteudo>  
                <div className="Textinho">
                
                <Titulo>O que é o HUBs?</Titulo>        
                <br></br>                
                    <P>
                        Um espaço colaborativo de inovação, presente nas quatro <br/> 
                        unidades Ibmec (BH, SP, RJ e Brasília), que busca estimular <br/>
                        o networking e o empreendedorismo por meio da conexão <br/>
                        entre empreendedores locais, mentores e empresas.
                    </P>
                    
                    <ImgLogo id="logo" src={hubs} alt={'primeira imagem hubs'}/>

                    <Subtitulo>Fazendo parte do HUBs você pode:</Subtitulo>
                    <Lista>
                        <li>
                            Contar com uma infraestrutura moderna e confortável <br/> dotada de espaço de coworking, salas de trabalho <br/> individuais e sala de reunião;
                        </li>
                        <li>
                            Participar de mentoria com empreendedores e profissionais <br/> de mercado;
                        </li>
                        <li>
                            Participar de palestras, minicursos e workshops com <br/> professores do Ibmec;
                        </li>
                        <li>
                            Participar de desafios de negócios do Hubs e de empresas <br/> parceiras;
                        </li>
                        <li>
                            Fazer networking.
                        </li>
                    </Lista>     
                </div>
                
            </Conteudo>
            <SegundaSection>
                        <h1>STARTUPS</h1>
                        <div className='container'>
                        {
                            dados.map( (p, ind) => (
                                <Startup 
                                    key={ind}
                                    imagem = {p.imagem}
                                    nome = {p.nome}
                                    texto={p.texto}
                                    ID = {p.ID}
                                />

                            ))
                        }
                        </div> 
                </SegundaSection>  

            <TerceiraSection>
                <SectionNoticia>
                    <h1>Notícias</h1>
                <a href="https://blog.ibmec.br/noticias/ex-aluno-de-administracao-do-ibmec-rj-e-aprovado-no-mba-do-mit-nos-eua/?_ga=2.199914926.147188793.1668013948-108964509.1651693829" target="blank">
                        <PrimeiraNoticia src={noticia1} alt={'primeira notícia do hubs'}/>
                        <TextoNoticia>Ex-aluno de Administração do Ibmec RJ é aprovado no MBA do MIT, nos EUA</TextoNoticia>
                    </a>

                    <a href="https://blog.ibmec.br/conteudo-gratuito/ibmec-rj-cria-ecossistema-de-inovacao-para-desenvolver-startups/?_ga=2.233389726.147188793.1668013948-108964509.1651693829" target="blank">
                        <SegundaNoticia src={noticia2} alt={'segunda notícia do hubs'}/>
                        <Texto2>Ibmec RJ cria ecossistema de inovação para desenvolver startups</Texto2>
                    </a>

                    <a href="https://blog.ibmec.br/noticias/?_ga=2.25384637.147188793.1668013948-108964509.1651693829" target="blank">
                        <h3>Todas as notícias</h3>
                    </a>
                </SectionNoticia>
                
                <ImgDiv>
                    <img src={hubsEstrutura} alt={'Estrutura do hubs'}/>
                    <p>Unidade do Rio de Janeiro</p>
                </ImgDiv>
            
            </TerceiraSection>

            <a href="https://estude.ibmec.br/ibmec-hubs" target="_blank"><Botao>
                Saiba Mais
            </Botao></a>

            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        </Master>
    )
}
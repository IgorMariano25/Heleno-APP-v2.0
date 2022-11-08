import React from 'react'
import hubs from '../../assets/hubsimg.png'
import { useState} from "react";
import hubsEstrutura from '../../assets/hubs_ibmec_rio.jpg'
import Master from '../masterPage'
import {PrimeiraSection, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista, TituloImagem, Container, SegundaSection, Botao} from './style';
import arquivo from '../../startups.json'
import Startup from '../../components/Hubs/Startup';



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
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           
            <a href="https://estude.ibmec.br/ibmec-hubs" target="_blank"><Botao>
                Saiba Mais
            </Botao></a>

            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        </Master>
    )
}
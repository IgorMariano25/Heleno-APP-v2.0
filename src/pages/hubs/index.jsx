import React from 'react'
import hubs from '../../assets/hubsimg.png'
import hubsEstrutura from '../../assets/hubs_ibmec_rio.jpg'
import Master from '../masterPage'
import {PrimeiraSection, Img, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista, TituloImagem, Container, DivImagem,
DivConteudo} from './style';

export default function HUBS(){
    return(
        <Master> 
            <>
            <Container>
            <PrimeiraSection>
            </PrimeiraSection>
            <TituloImagem>CONECTANDO EMPRESAS EM BUSCA DE INOVAÇÃO A EMPREENDEDORES E SUAS SOLUÇÕES.</TituloImagem>
            </Container>
            </>
           

             
            <Conteudo>  
                <div className="Texto">
                
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
            <br/>
            <br/>
        </Master>
    )
}
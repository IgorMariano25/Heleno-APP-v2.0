import React from 'react'
import hubs from '../../assets/hubsimg.png'
import hubsEstrutura from '../../assets/hubs_ibmec_rio.jpg'
import hubsAbertura from '../../assets/hubs2.jpeg'
import Master from '../masterPage'
import {PrimeiraSection, Img, Titulo, Conteudo, ImgLogo, P, Subtitulo, Lista} from './style';

export default function HUBS(){
    return(
        <Master> 
            <PrimeiraSection>
                <Img  id="hubs_abertura" src={hubsAbertura} alt={'imagem de abertura'}/>

            </PrimeiraSection>

            <ImgLogo id="logo" src={hubs} alt={'primeira imagem hubs'}/>  
            <Conteudo>  

                <Titulo>O que é o HUBs?</Titulo>        
                <br></br>                
                <div className="Texto">
                    <P>Um espaço colaborativo de inovação, presente nas quatro unidades Ibmec (BH, SP, RJ e Brasília), que busca estimular o networking e o empreendedorismo por meio da conexão entre empreendedores locais, mentores e empresas.
                    </P>

                    <Subtitulo>Fazendo parte do HUBs você pode:</Subtitulo>
                    <Lista>
                        <li>
                            Contar com uma infraestrutura moderna e confortável dotada de espaço de coworking, salas de trabalho individuais e sala de reunião;
                        </li>
                        <li>
                            Participar de mentoria com empreendedores e profissionais de mercado;
                        </li>
                        <li>
                            Participar de palestras, minicursos e workshops com professores do Ibmec;
                        </li>
                        <li>
                            Participar de desafios de negócios do Hubs e de empresas parceiras;
                        </li>
                        <li>
                            Fazer networking.
                        </li>
                    </Lista>
                    
                </div>
            </Conteudo>

            <PrimeiraSection>

            </PrimeiraSection>
        </Master>
    )
}
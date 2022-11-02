import React from 'react'
import hubs from '../../assets/hubsimg.png'
import hubsEstrutura from '../../assets/hubs_ibmec_rio.jpg'
import hubsAbertura from '../../assets/hubs2.jpeg'
import Topo from '../masterPage';
import {PrimeiraSection, Img, Titulo, Conteudo, ImgLogo, P} from './style';

export default function HUBS(){
    return(
        <div> 
            <Topo>
                <br/>
                <br/>
                <br/>
                <br/>
                <PrimeiraSection>
                    <Img  id="hubs_abertura" src={hubsAbertura} alt={'imagem de abertura'}/>
                    
                </PrimeiraSection>

                <ImgLogo id="logo" src={hubs} alt={'primeira imagem hubs'}/>  
                <Conteudo>  

                    <h1 className="Título">O que é o HUBs?</h1>        
                    <br></br>                
                    <div className="Texto">
                        <P>Um espaço colaborativo de inovação, presente nas quatro unidades Ibmec (BH, SP, RJ e Brasília), que busca estimular o networking e o empreendedorismo por meio da conexão entre empreendedores locais, mentores e empresas.
                        </P>

                        <p>Fazendo parte do HUBs você pode:</p>
                        <ul>
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
                        </ul>
                        
                    </div>
                </Conteudo>

                <PrimeiraSection>

                </PrimeiraSection>
            </Topo>
        </div>
    )
}
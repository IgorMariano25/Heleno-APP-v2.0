import React from 'react'
import hubs from '../../assets/hubsimg.png'
import hubsEstrutura from '../../assets/hubs_ibmec_rio.jpg'
import Topo from "../../components/Hubs/topo";
import Footer from "../../components/Hubs/footer";
import Master from '../masterPage';
import './styles.css';
import { Conteudo } from '../../components/Contato/styledComponents';





export default function App(){
  return(
    <div>
        <Master  tipoFooter="tipo3">
            <Conteudo>
                <img    id='logohubs'
                        src={hubs}
                        alt={'primeira imagem hubs'}
                />  
                
                <h1 className="Título1">Conectando empresas em busca de inovação a empreendedores e suas soluções</h1>
                <h2 className="Título">O que é o HUBs?</h2>        
                <br></br>                
                <div className="Texto">
                    <p>Um espaço colaborativo de inovação, presente nas quatro unidades Ibmec (BH, SP, RJ e Brasília), que busca estimular o networking e o empreendedorismo por meio da conexão entre empreendedores locais, mentores e empresas.
                    </p>

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
                <br></br>
                <img   id='estrutura_hubs'
                        src={hubsEstrutura}
                        alt={'sala hubs'}
                />

                <p id='unidade'>Unidade do Rio de Janeiro.</p>

                <div className="AlinhamentoBtnHubs">
                    <a href="https://www.ibmec.br/ibmec-hubs" target="_blank" rel="noreferrer">
                        <button id="SiteHubs">
                            Saiba Mais
                        </button>
                    </a>    
                </div>  
            </Conteudo>
        </Master>
    </div>
  );
}





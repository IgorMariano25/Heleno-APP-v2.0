import React from 'react'
import hubs from '../../assets/hubsimg.png'
import Topo from "../../components/Contato/topo";
import Footer from "../../components/Contato/footer";
import './styles.css';




export default function App(){
  return(
    <div>
        <Topo/>
        <img    id='logohubs'
                  src={hubs}
                  alt={'primeira imagem hubs'}
          />  
       
        <h1 className="Título">O que é o HUBs?</h1>        
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
    
        <Footer/>
    </div>
  );
}



import React from 'react'
import hubs from '../../assets/hubsimg.png'
import Topo from "../../components/Contato/topo";
import Footer from "../../components/Contato/footer";
import './styles.css';
import { ConteudoPage, Titulo, P, SubTitulo} from "../../components/Hubs/styledComponents";



export default function App(){
  return(
    <div>
        <Topo/>
        <ConteudoPage>
          <div className='imgHubs'>
          <img    id='logohubs'
                  src={hubs}
                  alt={'primeira imagem hubs'}
          />
          </div>
          <div className='Introducao'>
          <Titulo>O que é o Hubs?</Titulo>
          <P>Um espaço colaborativo de inovação, presente nas quatro unidades Ibmec (BH, SP, RJ e Brasília), que busca estimular o networking e 
            o empreendedorismo por meio da conexão entre empreendedores locais, mentores e empresas.</P>
          </div>
        </ConteudoPage>
        <Footer/>
    </div>
  );
}





import React from 'react'
import hubs from '../../assets/hubsimg.png'
import Topo from "../../components/Contato/topo";
import Footer from "../../components/Contato/footer";
import './styles.css';




export default function App(){
  return(
    <div>
        <Topo/>
       
        <h1>O que é o HUBs?</h1>           
        <br></br>                   
        <p>Um espaço colaborativo de inovação, presente nas quatro unidades Ibmec (BH, SP, RJ e Brasília),</p>
        <p>que busca estimular o networking e o empreendedorismo por meio da conexão</p>
        <p>entre empreendedores locais, mentores e empresas.</p>
        
        <img    id='logohubs'
                  src={hubs}
                  alt={'primeira imagem hubs'}
          />
        <Footer/>
    </div>
  );
}



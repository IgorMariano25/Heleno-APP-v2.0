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
        <Footer/>
    </div>
  );
}



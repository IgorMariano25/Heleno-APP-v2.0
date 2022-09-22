import React from 'react'
import hubs from '../../assets/hubs.png'
import { Img } from 'react-native';
import { useNavigate } from "react-router-dom";


const index = () => {
  const navigate = useNavigate(); 
    return(
        <div>
            <img src={hubs} alt="logo-hubs" width="100px" height="100px"/>
        </div>
    )

}

export default index


import Topo from "../../components/Hubs/topo";
import RodaPe from "../../components/Hubs/footer";



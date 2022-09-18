import Topo from "../components/Portfolios/topo";
import RodaPe from "../components/Portfolios/footer";
import ProjetoCardDetalhado from "../components/Portfolios/cardProjetoDetalhado";
import arquivo from "../projetos.json";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProjetoDetalhado = () => {
    const [dadosProjeto] = useState(arquivo)
    const { id } = useParams();

    const filtrados = dadosProjeto.filter(
        (e) => e.ID === parseInt(id)
      );


    return(  
    <div>
        <Topo/>
        <div className="ContainerCardProjetos">
            {filtrados.map( (p, ind) => (
                    <ProjetoCardDetalhado
                     key = { ind }
                    fotoProjeto = {p.fotoProjeto}
                    titulo = {p.titulo}
                    tecnologias = {p.tecnologias}
                    participantes = {p.participantes}
                        />
                    ))
                }
         </div>
        <RodaPe/>
    </div>
)
}

export default ProjetoDetalhado;
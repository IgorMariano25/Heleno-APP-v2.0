import Topo from "../components/Alunos/topo";
import RodaPe from "../components/Alunos/footer";
import PessoaCardDetalhado from "../components/Alunos/cardPessoaDetalhado";
import arquivo from "../dados.json";
import { useParams } from "react-router-dom";

import "../App.css";
import { useState } from "react";

const Perfil = () => {
  const [dados] = useState(arquivo);
  const { id } = useParams();

  const filtrados = dados.filter(
    (e) => e.ID === parseInt(id)
  );
  
  return (
    <div>
      <Topo/>  
        <div className="PerfilAlunoDetalhado">
          {filtrados.map((p, ind) => (
            <PessoaCardDetalhado
                key= { ind }
                imagem = {p.imagem}
                nome= {p.nome}
                curso= {p.curso}
                matricula= {p.matricula}
                ingresso= {p.ingresso}
                formacao= {p.formacao}
                bio= {p.bio}
                Projetos= {p.Projetos}
            />
          ))
          }       
      </div>
      <RodaPe/>
    </div>
  );
};

export default Perfil;

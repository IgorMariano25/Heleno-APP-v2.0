import Master from './masterPage'
import PessoaCardDetalhado from "../components/Alunos/cardPessoaDetalhado";
import arquivo from "../dados.json";
import { useParams } from "react-router-dom";

import "../App.css";
import { useState } from "react";

export default function App(){
  const [dados] = useState(arquivo);
  const { id } = useParams();

  const filtrados = dados.filter(
    (e) => e.ID === parseInt(id)
  );
  
  return (
    <Master>
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
    </Master>
  );
}
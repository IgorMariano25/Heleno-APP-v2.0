import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import ProjetoCard from "../components/CardProjetos/ProjetoCard";
import arquivo from "../projetos.json";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

const Projetos = () => {
    const [dados, setDados] = useState(arquivo);
    const [parametros, setParametros] = useSearchParams();
    const entrada = useRef();


    const filtra = useCallback((dados) => {
        const parametro = parametros.get("busca");

        if (!parametro) {
            return dados;

        } else {
            const filtrados = dados.filter(
                (e) => e.titulo.toLowerCase().includes(parametro.toLocaleLowerCase()) || e.participantes.toLowerCase().includes(parametro.toLocaleLowerCase()) || e.tecnologias.toLowerCase().includes(parametro.toLocaleLowerCase())
            );
            return filtrados;
        }

    }, [parametros]);


    useEffect(() => {
        const dadosFiltrados = filtra(arquivo);
        setDados(dadosFiltrados);

    }, [filtra]);

    return (
        <div className="container">
            <Topo/>
            <div className="Pesquisa">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setParametros({"busca": `${entrada.current.value}`})
                    }}>

                    <input
                        type="text"
                        ref={entrada}
                        className="Filtro"
                        placeholder="Buscar"
                        />
                    <button type='submit' className="BotaoFiltro">Pesquisar</button>
                </form>
            </div>
            <div className="ContainerCardProjetos">
                {
                        dados.map( (p, ind) => (
                            <ProjetoCard
                                    key = { ind }
                                    fotoProjeto = {p.fotoProjeto}
                                    titulo = {p.titulo}
                                    tecnologias = {p.tecnologias}
                                    participantes = {p.participantes}
                                    ID = {p.ID}
                            />
                        ))
                    }
            </div>
            <RodaPe/>
        </div>
    );
}

export default Projetos;

import React from 'react';
import './styles.css';
import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import CardGraduacao from '../../components/Graduacao/cardGraduacao';
import arquivo from '../../cursosGraduacao.json'

import Master from "../masterPage";
import ExportBanner from "../../components/Graduacao/banner/bannerGraduacao"


export default function App(){

    const [dados, setDados] = useState(arquivo);

    const [parametros, setParametros] = useSearchParams();

    const entrada = useRef();


    const filtra = useCallback((dados) => {

        const parametro = parametros.get("busca");


        if (!parametro) {

            return dados;


        } else {

            const filtrados = dados.filter(

                (e) => e.nome.toLowerCase().includes(parametro.toLocaleLowerCase()) || e.curso.toLowerCase().includes(parametro.toLocaleLowerCase())

            );

            return filtrados;

        }


    }, [parametros]);


    useEffect(() => {

        const dadosFiltrados = filtra(arquivo);

        setDados(dadosFiltrados);


    }, [filtra]);

    return (
        <Master tipoFooter="tipo3">
            <ExportBanner/>

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

                <div className="container">

                {
                    dados.map( (p, ind) => (
                        <CardGraduacao
                            key = { ind }
                            imagem = {p.imagem}
                            nome = {p.nome}
                            curso = {p.curso}
                            ID = {p.ID}
                        />

                    ))

                }

            </div>
        </Master>
    );
}

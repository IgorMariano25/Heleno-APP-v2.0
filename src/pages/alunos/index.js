import React from 'react';
import './estilo.css';
import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
<<<<<<< HEAD
import PessoaCard from '../../components/Alunos/cardPessoa';
import arquivo from '../../pessoas.json'
=======
import CardPessoa from '../../components/Alunos/cardPessoa';
import arquivo from '../../dados.json'
>>>>>>> release

import Master from "../masterPage";


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
        <Master tipoFooter="tipo1">
        

        <div className='conteudo'>
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
                <div className="containerAlunos">

                {
                    dados.map( (p, ind) => (
                        <CardPessoa
                                key = { ind }
                                imagem = {p.imagem}
                                nome = {p.nome}
                                curso = {p.curso}
                                ID = {p.ID}
                        />
                    ))

                }

                </div>
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </Master>
    );
}

import React from 'react';
import Master from '../masterPage'
import banner from './assets/bannerMBA.png';
import diferencial1 from './assets/1.png';
import diferencial2 from './assets/2.png';
import diferencial3 from './assets/3.png';


import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import './style.css';
import arquivo from '../../cursosMba.json'

import CardCurso from '../../components/Mba/cardCursos'
import { TbDiamonds } from 'react-icons/tb';

export default function MBA(){
    const [dados, setDados] = useState(arquivo);

    const [parametros, setParametros] = useSearchParams();

    const entrada = useRef();


    const filtra = useCallback((dados) => {

        const parametro = parametros.get("busca");


        if (!parametro) {

            return dados;


        } else {

            const filtrados = dados.filter(

                (e) => e.nome.toLowerCase().includes(parametro.toLocaleLowerCase()) || e.duracao.toLowerCase().includes(parametro.toLocaleLowerCase()) || e.tipo.toLowerCase().includes(parametro.toLowerCase()) || e.categoria.toLowerCase().includes(parametro.toLowerCase())

            );

            return filtrados;

        }


    }, [parametros]);


    useEffect(() => {

        const dadosFiltrados = filtra(arquivo);

        setDados(dadosFiltrados);


    }, [filtra]);


    return(
        <Master>
            
            <div className="banner">
                <img
                    id='bannerMBA'
                    src={banner}
                    alt={'MBA Ibmec'}
                />
            </div>
            
            <div className="diferenciais">
                <h2>Nossos Diferenciais</h2>

                <div className="container">
                    <div className="box-diferencial">
                            <img
                                className='imgDiferencial'
                                src={diferencial1}
                                alt={'jornada empreendedora'}
                            />
                            <h4>Jornada Empreendedora</h4>
                            <p>
                            No Ibmec Hubs você tira suas ideias do papel e constrói sua start-up com o 
                            apoio de profissionais experientes. Mentores do Ibmec Hubs do Rio de Janeiro 
                            ensina e auxilia nos primeiros passos para aqueles que querem iniciar sua jornada empreendedora
                            de sucesso.  

                            </p>
                    </div>

                    <div className="box-diferencial">
                            <img
                                className='imgDiferencial'
                                src={diferencial2}
                                alt={'soft skills'}
                            />
                            <h4>Soft skills na prática</h4>
                            <p>
                            O Ibmec Carreiras oferece serviços com equipe especializada com o objetivo 
                            de orientar alunos e ex-alunos de graduação e pós-graduação no planejamento 
                            de suas carreiras, tanto no mercado de trabalho como empreendendo,
                            com autonomia e visão de futuro. 
        

                            </p>
                    </div>  

                    <div className="box-diferencial">
                            <img
                                className='imgDiferencial'
                                src={diferencial3}
                                alt={'liderança'}
                            />
                            <h4>Seja um lider</h4>
                            <p>
                            Você terá acesso ao CEI, Centro de Empreendedorismo e 
                            Inovação, um conjunto de células e projetos para você 
                            exercitar suas competências e habilidades com liberdade e 
                            autonomia. Seja um lider diferenciado em um mercado competitivo.

                            </p>
                    </div>      
                </div>

            </div>

            <div className="metodologia">
                <h2>Metodologia na prática</h2>
                <p>
                A proposta pedagógica dos cursos propõe o 
                desenvolvimento das competências e habilidades 
                exigidas aos profissionais do futuro.
                </p>
                <button
                    className="bt-ingresse"
                    id="white"
                >
                    <a id="bt1" href="https://www.ibmec.br/pos-graduacao/mba">Ingresse Agora</a>
                </button>

                <div className="container">
                    <div className="box-metodologia">


                    </div>
                </div>

            </div>

            <div className="container-cursos">
                <h2>Conheça nossos cursos</h2>

                <div className="cursos">
                    
                    {
                        dados.map( (p, ind) => (
                            <CardCurso
                                key = { ind }
                                ID = { p.Id }
                                nome = { p.nome }
                                duracao = { p.duracao }
                                tipo = { p.tipo }
                                categoria = { p.categoria }
                                link = { p.link }
                            />


                        ))
                    }
                </div>
                <button className="bt-ingresse">
                    <a id="bt2" href="https://www.ibmec.br/pos-graduacao/mba">Ingresse Agora</a>
                </button>
            </div>

        </Master>
    )
}

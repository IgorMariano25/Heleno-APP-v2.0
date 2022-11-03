import Master from '../masterPage'
import banner from './assets/bannerMBA.png';
import './style.css';

import CardCurso from '../../components/Mba/cardCursos'

export default function MBA(){
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
                                src={banner}
                                alt={'teste1'}
                            />
                            <h4>Jornada Empreendedora</h4>
                            <p>
                            lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. 

                            </p>
                    </div>

                    <div className="box-diferencial">
                            <img
                                className='imgDiferencial'
                                src={banner}
                                alt={'teste2'}
                            />
                            <h4>Jornada Empreendedora</h4>
                            <p>
                            lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. 

                            </p>
                    </div>  

                    <div className="box-diferencial">
                            <img
                                className='imgDiferencial'
                                src={banner}
                                alt={'teste3'}
                            />
                            <h4>Jornada Empreendedora</h4>
                            <p>
                            lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. 

                            </p>
                    </div>      
                </div>

            </div>

            <div className="metodologia">
                <h2>Metodologia na prática</h2>
                <p>
                    lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book.
                </p>
                <button
                    id="bt-ingresse"
                >
                    Ingresse Agora
                </button>

                <div className="container">
                    <div className="box-metodologia">


                    </div>
                </div>

            </div>

            <div className="cursos">
                <h2>Conheça nossos cursos</h2>
                <CardCurso
                nomeCurso="Teste1" 
                descricaoCurso="testedesc"/>


            </div>

        </Master>
    )
}

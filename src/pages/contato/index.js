import Master from '../masterPage'
import Formulario from "../../components/Contato/formulario";
import { Img, Conteudo } from "../../components/Contato/styledComponents";
import './styles.css';

export default function App(){
    return (
        <Master  tipoFooter="tipo2">
            <Conteudo>
                <div className="ConteudoContato">
                    <Img
                        src={ `imagens/imagemContato.jpg` }
                        alt={'imagem de computador contendo código'}
                    />
                    <Formulario/>
                </div>
            </Conteudo>
        </Master>
    );
}
import Topo from "../../components/Contato/topo";
import Footer from "../../components/Contato/footer";
import Formulario from "../../components/Contato/formulario";
import { Img, Conteudo } from "../../components/Contato/styledComponents";

export default function App(){
    return (
        <div>
            <Topo/>
            <Conteudo>
                <div className="ConteudoContato">
                    <Img
                        src={ `imagens/imagemContato.jpg` }
                        alt={'imagem de computador contendo código'}
                    />
                    <Formulario/>
                </div>
            </Conteudo>
            <Footer/>
        </div>
    );
}
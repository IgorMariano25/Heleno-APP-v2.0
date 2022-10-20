import Master from '../masterPage'
import { Conteudo } from "../../components/Sobre/styledComponents";
import Sobre from '../../components/Sobre/sobre';

export default function App(){
    return (
        <Master tipoFooter="tipo3">
            <Conteudo>
                <Sobre/>
            </Conteudo>
        </Master>
    );
}

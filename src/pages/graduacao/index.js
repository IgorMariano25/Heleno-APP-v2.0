import Master from '../masterPage'
import { Conteudo } from "../../components/Graduacao/styles";
import Graduacao from '../../components/Graduacao/graduacao';

export default function App(){
    return (
        <Master tipoFooter="tipo1">
            <Conteudo>
                <Graduacao/>
            </Conteudo>
        </Master>
    );
}

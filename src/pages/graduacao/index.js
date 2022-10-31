import Master from '../masterPage'
import { Conteudo } from "../../components/Graduacao/styledComponents";
import Graduacao from '../../components/Graduacao/graduacao';

export default function App(){
    return (
        <Master tipoFooter="tipo3">
            <Conteudo>
                <Graduacao/>
            </Conteudo>
        </Master>
    );
}

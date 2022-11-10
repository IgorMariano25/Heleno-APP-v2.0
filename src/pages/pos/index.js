import Master from '../masterPage'
import Banner from '../../components/Pos/Banner'
import { Conteudo } from "../../components/Sobre/styledComponents";
import "./styles.css"

export default function App(){
    return (
        <Master>
            <Conteudo>
                <Banner/>
            </Conteudo>
        </Master>
    );
}

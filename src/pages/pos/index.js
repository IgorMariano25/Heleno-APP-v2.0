import Master from '../masterPage'
import Banner from '../../components/Pos/Banner'
import Carousel from '../../components/Pos/Carousel'
import { Conteudo } from "../../components/Sobre/styledComponents";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    return (
        <Master>
            <Conteudo>
                <Banner/>
                <Carousel/>
            </Conteudo>
        </Master>
    );
}

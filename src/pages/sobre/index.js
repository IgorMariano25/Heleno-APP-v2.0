import Master from '../masterPage'
import Banner from '../../components/Sobre/banner/banner';
import Conteudo from '../../components/Sobre/conteudo/conteudo';

export default function App(){

    return (

        <Master>
            <Banner></Banner>
            <Conteudo></Conteudo>
        </Master>
    );
}
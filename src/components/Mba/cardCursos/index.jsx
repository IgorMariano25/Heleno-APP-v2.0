import {Card} from "./style.js";

export default function App(props){
    return(
        <Card>
            <h3>{props.nomeCurso}</h3>
            <p>{props.duracaoCurso}</p>
            <p>{props.tipoCurso}</p> {/*PRESENCIAL ou EAD*/}
            <button>Inscreva-se</button>
        
        </Card>
    )

} 
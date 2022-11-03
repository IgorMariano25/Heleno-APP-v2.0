import Master from '../masterPage'
import banner from './assets/bannerMBA.png';
import './style.css';


export default function MBA(){
    return(
        <Master>
            <Header/>
            
            <div className="banner">
                <img
                    id='bannerMBA'
                    src={banner}
                    alt={'MBA Ibmec'}
                />
            </div>
            
            <div className="diferenciais">
                


            </div>

            <div className="cursos">


            </div>

            <Footer/>
        </Master>
    )
}

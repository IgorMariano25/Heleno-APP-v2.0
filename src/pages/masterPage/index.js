import Header from '../../components/MasterPage/header';
import Footer from '../../components/MasterPage/footer';

export default function App(props) {
  return (
    <>
        <Header/>
          {props.children}
        <Footer tipo={props.tipoFooter}/> 
    </>
  );
}
import Header from '../../components/MasterPage/header';
import Footer from '../../components/MasterPage/footer';

export default function App(props) {
  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
        <Header/>
          {props.children}
        <Footer/> 
    </div>
  );
}
import ReactDOM from 'react-dom';
import './index.css';
//import InitRoot from '../src/introduction/root';
//import Activities from '../src/introduction/activities';
import Routes from './routes';


function IntoTokenVerify() {

    const toggleShow1=()=>{
        sessionStorage.setItem("tokenHsb","cghfghfghfgh")
    }
    const toggleShow2=()=>{
        sessionStorage.removeItem("tokenHsb") 
    }

    if (sessionStorage.getItem("tokenHsb") === null) {
        console.log(" varinto  "+ sessionStorage.getItem("tokenHsb"));
        //window.location.href=
    return(<div>
            
            <button onClick={()=>{toggleShow1(); }}>chance token </button>
            </div>);
    }else{
        console.log(" var  "+sessionStorage.getItem("tokenHsb"));
    return(<div>  
            
            <button onClick={()=>{toggleShow2(); }}>chance token </button>
            </div>);
    } 



}

ReactDOM.render(<><Routes/><IntoTokenVerify/></>, document.getElementById('root'));
  
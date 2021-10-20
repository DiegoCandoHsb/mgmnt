import './root.css';
import NavBar from './component/navBar/navBar'
//import { useState } from 'react';

function Activities() {
 //const [token, settoken] = useState("")
 //settoken(sessionStorage.getItem("tokenHsb"));


/*   useEffect(() => {
    settoken(sessionStorage.getItem("tokenHsb"));
    if (token) {
     console.log("ACTIVITIES : "+token)
     window.location.href="/" 
    }
  },[token]) 
 */




  return (
    <div className="root">
      
      <NavBar/>
      <div className="div-preoload">
        <div className="preloader"></div>
      </div>
    </div>
  );
}

export default Activities;

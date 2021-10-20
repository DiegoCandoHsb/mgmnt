import './root.css';
import NavBar from './component/navBar/navBar'
import { useState,useEffect } from 'react';
import Api from "../services";





function Activities() {
 const [token, settoken] = useState(0)

   useEffect(() => {
  settoken(sessionStorage.getItem( Api.apiTokenAccesId()));
  },[token]) 
 


  return (
      (token===0) ? <div className="div-preoload"><div className="preloader"></div></div>:

    <div className="root">
      <NavBar/>
      <div>
        {/* code Katherine */}
      </div>
    </div>
  );
}

export default Activities;

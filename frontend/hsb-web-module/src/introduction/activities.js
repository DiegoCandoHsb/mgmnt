import './root.css';
import NavBar from './component/navBar/navBar'
import { useState,useEffect } from 'react';
import Api from "../services";
import Loading from "../introduction/component/loading"





function Activities() {
 const [token, settoken] = useState(0)


 

   useEffect(() => {
  settoken(sessionStorage.getItem(Api.apiTokenAccesId()));
    
  if (token === 0) {
  sessionStorage.removeItem("")
  }

  },[token]) 
 


  return (
      (token === 0) ? <Loading/>:

    <div className="root">
      <NavBar/>
      <div>
        {/* code Katherine */}
      </div>
    </div>
  );
}

export default Activities;

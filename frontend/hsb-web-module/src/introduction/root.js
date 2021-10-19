import './root.css';
import NavBarInto from '../introduction/component/navBar/navBarInto'
import { useState } from 'react';




function siginUp(params) {
  
}
function siginIn(params) {
  
}
function newPassword(params) {
  
}



function Root() {
  const [showSiginUp, setshowSiginUp] = useState(false);
  const [showSiginIn, setshowSiginIn] = useState(true);
  const [showNewPassword, setshowNewPassword] = useState(false);




  //const [token, settoken] = useState("")
  //settoken(sessionStorage.getItem("tokenHsb"));

/*    useEffect(() => {
    settoken(sessionStorage.getItem("tokenHsb"));
    if (token) {
     console.log("ROOT : "+token)
     window.location.href="/activities" 
    }
  },[token])  */

  return (
      <div className="root">
        <NavBarInto/>
        <div>
        <siginUp showSiginUp/>
        <siginIn/>
        <newPassword/>

        </div>
      </div>
      
  );
}






export default Root;

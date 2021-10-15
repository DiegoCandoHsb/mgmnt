import './root.css';
import NavBarInto from '../introduction/component/navBar/navBarInto'
import { useEffect,useState } from 'react';


function Root() {
const token = useState(sessionStorage.getItem("tokenHsb"));

  useEffect(() => {
    if (token === null) {
      window.location.href="./"
    }else{console.log("window activities and token : "+token)}
  },[token])

  return (
    <div className="root">
      <NavBarInto/>
    </div>
  );
}

export default Root;

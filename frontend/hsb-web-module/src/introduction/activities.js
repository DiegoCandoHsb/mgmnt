import './root.css';
import NavBar from './component/navBar/navBar'
import { useEffect,useState } from 'react';

function Activities() {
  const token = useState(sessionStorage.getItem("tokenHsb"));


  useEffect(() => {
    if (token === null) {
      window.location.href="./"
    }else{console.log("window activities and token : "+token)}
  },[token])

  return (
    <div className="root">
      <NavBar/>
    </div>
  );
}

export default Activities;

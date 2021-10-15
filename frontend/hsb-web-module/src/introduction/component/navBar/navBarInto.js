import './navBar.css';
import React from 'react';


function NavBar(props) {

  return (
    <nav className="navBar-container ">
      <div className="content-div1 ">
        <button ><img  className="icon-init" src="./nameHSB.svg" alt="init"/></button>
      </div>
      <div className="content-div2 ">
      <button  translate="yes" onClick={()=>{sessionStorage.setItem("tokenHsb","asdfasfsdfsdfsf"); window.location.href="./activities"}} >exit</button>

      </div>
    </nav>
  );
}


  
  export default NavBar;
  
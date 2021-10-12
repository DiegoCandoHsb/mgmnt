import './navBar.css';
import React from 'react';


function NavBar1(props) {

    return (
      <nav className="navBar-container ">
      <div className="content-div1 ">
        <button ><img  className="icon-init" src="./nameHSB.svg" alt="init"/></button>
        <button className="menu" ><img  src="./588a64e0d06f6719692a2d10.png" alt="menu"/></button>
      </div>
      <div className="content-div2 ">
        <button ><img src="./user.png" alt="user"/></button>
        <button className="user-out" translate="yes" >exit</button>
      </div>
      </nav>
    );
  }


  
  export default NavBar1;
  
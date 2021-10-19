import './navBar.css';
import React from 'react';


function NavBar(props) {

    return (
      <nav className="navBar-container ">
      <div className="content-div1 ">
        <button onClick={()=>{window.location.href="/activities"}} ><img  className="icon-init" src="./nameHSB.svg" alt="init"/></button>
        <div className="dropdown">
            <button className="menu" ><img  src="./588a64e0d06f6719692a2d10.png" alt="menu"/></button>
                <div className="dropdown-content">
                  <a href="/activities/Expenses" >Expenses</a>
                  <a href="/activities/Fixed-assets" >Fixed assets</a>
                  <a href="/activities/Human-Resources" >Human Resources</a>
                </div>
        </div>
      </div>
      <div className="content-div2 ">
        <button ><img src="./user.png" alt="user"/></button>
        <button className="user-out" translate="yes" onClick={()=>{sessionStorage.removeItem("tokenHsb");window.location.href="/"}} >exit</button>
      </div>
      </nav>
    );
  }


  
  export default NavBar;
  
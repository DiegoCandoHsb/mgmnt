import ReactDOM from "react-dom";
import "./index.css";
import InitRoot from "../src/introduction/root";
import Activities from "../src/introduction/activities";
import "./routes";
import { useEffect, useState } from "react";

function IntoTokenVerify() {
  const [token, settoken] = useState();





  useEffect(() => {
    settoken(sessionStorage.getItem("tokenHsb"));
    if (token) {
      console.log("ACTIVITIES : " + token);
    }
  }, [token]);

  




  const toggleShow1 = () => 
        {
            sessionStorage.setItem("tokenHsb", "cghfghfghfgh");
        };
  const toggleShow2 = () => 
        {
            sessionStorage.removeItem("tokenHsb");
        };






  return token === null ? (
                            <div className="root">
                            <InitRoot />
                            <button onClick={() => {toggleShow1();}}>
                                change set
                            </button>
                            </div>
                        ) 
                        : (
                            <div className="root">
                            <Activities />
                            <button
                                onClick={() => {toggleShow2();}}>
                                change remove
                            </button>
                            </div>
                        );
}




ReactDOM.render(<IntoTokenVerify />, document.getElementById("root"));

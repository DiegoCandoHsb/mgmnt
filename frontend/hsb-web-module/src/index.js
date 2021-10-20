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

  return token === null ? (<div className="root"><InitRoot /></div>) 
                        : (<div className="root"><Activities /></div>);
}




ReactDOM.render(<IntoTokenVerify />, document.getElementById("root"));

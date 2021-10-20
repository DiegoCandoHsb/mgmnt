import ReactDOM from "react-dom";
import "./index.css";
import InitRoot from "../src/introduction/root";
//import Activities from "../src/introduction/activities";
import "./routes";
import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";
const Activities = lazy(()=>import("../src/introduction/activities"))

function IntoTokenVerify() {
  const [token, settoken] = useState();





  useEffect(() => {
    settoken(sessionStorage.getItem("tokenHsb"));
  }, [token]);

  return token === null ? (<div className="root"><InitRoot /></div>) 
                        : (<div className="root">
                        <Suspense fallback="../src/introduction/component/loading.js">
                          <Activities/>
                        </Suspense>

                        </div>);
}




ReactDOM.render(<IntoTokenVerify />, document.getElementById("root"));

import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import InitRoot from '../src/introduction/root';
import Activities from '../src/introduction/activities';





function routes() {
    return ( 
        <BrowserRouter>
            <Switch >
                <Route exact path="/"  component={InitRoot} render={()=>{(sessionStorage.getItem("tokenHsb") === null) ? window.location.href="./":window.location.href="./activities"}}/>
                <Route   path="/activities"   component={Activities} render={()=>{(sessionStorage.getItem("tokenHsb") === null) ? window.location.href="./":window.location.href="./activities"}}  />
            </Switch>
        </BrowserRouter>
        );
}

export default routes;
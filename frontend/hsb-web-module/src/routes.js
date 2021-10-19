import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import InitRoot from '../src/introduction/root';
import Activities from '../src/introduction/activities';





function routes() {

    return ( 
        <BrowserRouter>
            <Switch >
            <Route  exact path="/"  component={InitRoot}/>
            <Route  exact path="/activities"  component={Activities}/>
            
             </Switch>
        </BrowserRouter>
        );
}

export default routes;
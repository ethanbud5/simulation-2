import React from "react";
import {Switch,Route} from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Add1 from "./Components/Add1/Add1";
import Add2 from "./Components/Add2/Add2";
import Add3 from "./Components/Add3/Add3";
import HouseView from "./Components/HouseView/HouseView"

export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/step1" component={Add1}/>
        <Route path="/step2" component={Add2}/>
        <Route path="/step3" component={Add3}/>
        <Route path="/view/:id" component={HouseView}/>
    </Switch>
)
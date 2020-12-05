import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import HomePage from '../containers/HomePage';
import LoginPage from '../containers/Login';

import Home from "../pages/Home";
import Signin from "../pages/Sign-in";
import Signup from "../pages/Sign-up";



const PublicRoutes=()=>{
    // return <Router>
    //     <Switch>
    //         <Route exact={true} path="/signin" component={Signin} />
    //         <Route exact={true} path="/signup" component={Signup} />
    //         <Route exact={true} path="/home" component={Home} />
    //         <Redirect to="/home" />
    //     </Switch>
    //     </Router>

    return <Router>
        <Switch>
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/home" component={HomePage} />
            <Redirect to="/home" />
        </Switch>
    </Router>
}
export default PublicRoutes;
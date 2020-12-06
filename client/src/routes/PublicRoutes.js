import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import HomePage from '../containers/HomePage';
import LoginPage from '../containers/Login';
import SignupPage from '../containers/Signup';

import Dashboard from '../containers/Dashboard';
import Donate from '../containers/Donate';
import Volunteer from '../containers/Volunteer';
import History from '../containers/History';
import Favorites from '../containers/Favorites';



const PublicRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/signup" component={SignupPage} />

            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/donate" component={Donate} />
            <Route exact={true} path="/volunteer" component={Volunteer} />
            <Route exact={true} path="/history" component={History} />
            <Route exact={true} path="/favorites" component={Favorites} />
            
            <Redirect to="/home" />
        </Switch>
    </Router>
}
export default PublicRoutes;
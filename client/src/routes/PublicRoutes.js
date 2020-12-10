import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// public routes
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/Login';
import SignupPage from '../containers/Signup';

const PublicRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/signup" component={SignupPage} />
            
            <Redirect to="/home" />
        </Switch>
    </Router>
}
export default PublicRoutes;
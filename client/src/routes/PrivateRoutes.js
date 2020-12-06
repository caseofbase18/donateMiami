import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../containers/HomePage';

import Dashboard from '../containers/Dashboard';
import Donate from '../containers/Donate';
import Volunteer from '../containers/Volunteer';
import History from '../containers/History';
import Favorites from '../containers/Favorites';





const PrivateRoutes = () => {

    return <Router>
        <Switch>
            {/* <Route exact={true} path="/dashboard" component={Dashboard} /> */}
            
            <Route exact={true} path="/home" component={HomePage} />
            <Redirect to="/dashboard" />
        </Switch>
    </Router>
}
export default PrivateRoutes;
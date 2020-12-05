import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../containers/HomePage';
import Dashboard from '../containers/Dashboard';


// import Donate from "../pages/Donate";
// import Volunteer from "../pages/Volunteer";
// import History from "../pages/History";
// import Favorites from "../pages/Favorites";

const PrivateRoutes = () => {

    return <Router>
        <Switch>
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/home" component={HomePage} />
            <Redirect to="/dashboard" />
        </Switch>
    </Router>
}
export default PrivateRoutes;
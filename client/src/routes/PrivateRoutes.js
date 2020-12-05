import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../containers/HomePage';
import Dashboard from '../containers/Dashboard';

// import Search from "../pages/Search";
// import Donate from "../pages/Donate";
// import Volunteer from "../pages/Volunteer";
// import History from "../pages/History";
// import Favorites from "../pages/Favorites";

const PrivateRoutes = () => {
    // return <Router>
    //         <Switch>
    //             <Route exact path="/donate" component={Donate} />
    //             <Route exact path="/favorites" component={Favorites} />
    //             <Route exact path="/history" component={History} />
    //             <Route exact path="/search" component={Search} />
    //             <Route exact path="/volunteer" component={Volunteer} />
    //             <Route exact={true} path="/home" component={Home} />
    //             <Redirect to="/home" />
    //         </Switch>
    //     </Router>

    return <Router>
        <Switch>
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/home" component={HomePage} />
            <Redirect to="/dashboard" />
        </Switch>
    </Router>
}
export default PrivateRoutes;
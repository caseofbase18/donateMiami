import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Donate from "../pages/Donate";
import Volunteer from "../pages/Volunteer";
import History from "../pages/History";
import Favorites from "../pages/Favorites";
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

class AppContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    return <Switch>
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/history" component={History} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/volunteer" component={Volunteer} />
      <Route exact path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>

  };

  render() {
    return (
      <div>
        <Router>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        </Router>
      </div>
    );
  }
}

export default AppContainer;

import React from "react";
import { NavLink } from 'react-router-dom';
import Header from './Header';

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">

      <li>
        <Header />
      </li>

      <li className="nav-item">
        <NavLink
          to="/history">
          <span className={"nav-link"} rel="noopener noreferrer"
            id="history">&nbsp;&nbsp;&nbsp;View Giving History</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/favorites">
          <span className={"nav-link"} rel="noopener noreferrer"
            id="favorites">&nbsp;&nbsp;&nbsp;View Favorites</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/home">
          <span className={"nav-link"} rel="noopener noreferrer"
            id="logout">&nbsp;&nbsp;&nbsp;Logout</span>
        </NavLink>
      </li>

    </ul>
  );
}



export default NavTabs;

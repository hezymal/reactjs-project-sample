import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const NavBar: React.FC = () => (
  <nav className="NavBar">
    <ul className="NavBar-List">
      <li className="NavBar-Item">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="NavBar-Item">
        <NavLink to="/units">Units</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;

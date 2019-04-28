import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Links extends Component {
  render() {
    return (
      <div>
        <div className="list-group">
          <NavLink
            className="list-group-item"
            exact
            activeClassName="active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/content"
          >
            Content
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/form"
          >
            Form
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Links;

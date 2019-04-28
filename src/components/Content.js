import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Prompt,
  Switch
} from "react-router-dom";
import ContentDetails from "./ContentDetails";

const Content = () => (
  <div>
    <NavLink
      className="list-group-item"
      activeClassName="active"
      to="/content/city"
    >
      City
    </NavLink>
    <NavLink
      className="list-group-item"
      activeClassName="active"
      to="/content/sports"
    >
      Sports
    </NavLink>
    <Route path="/content/:contentName" component={ContentDetails} />
  </div>
);
export default Content;

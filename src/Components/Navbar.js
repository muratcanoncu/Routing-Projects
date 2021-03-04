import React from "react";
import { Route, NavLink, Link, Redirect } from "react-router-dom";
function Navbar() {
  return (
    <div
      className="d-flex align-items-center px-4 bg-primary"
      style={{ height: "85px" }}
    >
      <Link
        style={{ color: "black", fontWeight: "bolder", fontSize: "2.1rem" }}
        to="/"
      >
        My Projects
      </Link>
      <div
        className="d-flex justify-content-between ml-4"
        style={{ width: "800px" }}
      >
        <NavLink
          style={{ color: "white", fontWeight: "bolder", fontSize: "1.3rem" }}
          activeStyle={{ color: "red" }}
          to="/footballplayers"
        >
          Football Players Project
        </NavLink>
        <NavLink
          style={{ color: "white", fontWeight: "bolder", fontSize: "1.3rem" }}
          activeStyle={{ color: "red" }}
          to="/lastnews"
        >
          News App
        </NavLink>
        <NavLink
          style={{ color: "white", fontWeight: "bolder", fontSize: "1.3rem" }}
          activeStyle={{ color: "red" }}
          to="/movies"
        >
          Movies App
        </NavLink>
        <NavLink
          style={{ color: "white", fontWeight: "bolder", fontSize: "1.3rem" }}
          activeStyle={{ color: "red" }}
          to="/reacttodo"
        >
          React To Do
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

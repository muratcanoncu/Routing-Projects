import React from "react";
import { Link } from "react-router-dom";

function navbar(props) {
  return (
    <div style={{ display: "flex", height: "70px", width: "100%" }}>
      <h2>title</h2>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jumbo">List</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </div>
  );
}

export default navbar;

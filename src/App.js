import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//! Components
import Navbar from "./Components/Navbar";
//! Projects
import FootballPlayers from "./footballPlayers/App";
import NewsList from "./newsApp/App";
import Movies from "./moviesApp/App";
import ReactTodo from "./reactTodo/App";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div>
          <Switch>
            <Route path="/footballplayers" component={FootballPlayers}></Route>
            <Route path="/lastnews" component={NewsList}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/reacttodo" component={ReactTodo}></Route>

            <Route
              render={() => {
                return (
                  <h1 className="mt-5">Please Choose a Project On Navbar</h1>
                );
              }}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

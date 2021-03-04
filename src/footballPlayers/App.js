import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
//? Components
import Header from "./Component/header";
// import Player from "./Component/body";
// import List from "./Component/list";
import Jumbotron from "./Component/Jumbotron";
// import Electronics from "./Component/Electronics";
import Error from "./Component/Error/notFound";
import Navbar from "./Component/navbar";
//! keywords have to be imported
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {
  return <h3>This is my Home Page</h3>;
};
const About = () => {
  return <h2>This is my About Page</h2>;
};
const Books = () => {
  return <h2>This is Books page</h2>;
};
const Textbooks = () => {
  return <h2>This is Textbooks page</h2>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* 1st: Call component directly inside of App.js */}
          {/* <Navbar></Navbar> */}
          {/* <Switch> */}
          {/* <Route path="/" component={Header}></Route> */}
          {/* <Route path="/jumbo" component={Jumbotron}></Route> */}
          <Route component={Jumbotron}></Route>
          {/* <Route component={Error}></Route> */}
          {/* </Switch> */}
          {/* <Switch>
            <Route component={Error}></Route>
          </Switch> */}

          {/* <Jumbotron></Jumbotron> */}
          {/* 2nd: Wrap your App.js with "Router" */}

          {/* 3rd: Directly use components inside "Route" */}
          {/* <Route
            path="/"
            render={() => {
              return <h3>this is home page</h3>;
            }}
          ></Route>
          <Route
            path="/about"
            render={() => {
              return <h3>this is my about page</h3>;
            }}
          ></Route> */}

          {/* 4th */}
          {/* <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/books" component={Books}></Route>

          <Route path="/books/textbooks" exact component={Textbooks}></Route>
          <Route path="/electronics" exact component={Electronics}></Route> */}
        </div>
      </Router>
    );
  }
}

export default App;

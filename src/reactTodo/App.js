import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
//!Component
import Form from "./Components/form";
import MyMap from "./Components/map";
function App() {
  const [myState, setMyState] = useState({
    tasksList: [],
  });

  const updateTasks = (newTask) => {
    setMyState({
      tasksList: [...myState.tasksList, newTask],
    });
    const itemCount = myState.tasksList.length;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Memo List</h1>
        <h3>My plan for the day!</h3>
        <MyMap myTasks={myState.tasksList}></MyMap>
        <Form passUpdateHandler={updateTasks}></Form>
      </header>
    </div>
  );
}

export default App;

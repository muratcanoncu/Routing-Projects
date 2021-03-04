import React, { useState } from "react";

function form(props) {
  const [newTasks, setTasks] = useState({
    name: "",
    count: 1,
  });

  const changeHandler = (event) => {
    setTasks({
      name: event.target.value,
      count: newTasks.count,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    props.passUpdateHandler(newTasks);
    setTasks({
      name: "",
      count: newTasks.count + 1,
    });
  };
  return (
    <form onSubmit={submitForm}>
      <input
        style={{ marginRight: "10px" }}
        onChange={changeHandler}
        type="text"
        value={newTasks.name}
      ></input>
      <button type="submit">Add #{newTasks.count}</button>
    </form>
  );
}

export default form;

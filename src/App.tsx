import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Modal from "./components/transition-test/Modal";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <TaskInput />
        <TaskList />
        <Modal />
      </div>
    </>
  );
};

export default App;

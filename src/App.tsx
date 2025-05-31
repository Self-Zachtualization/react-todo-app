import { useState } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import type Task from "./models/Task";
import { TaskContext } from "./services/TaskContext";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const defaultTask = {
    title: "New Task",
    id: String(tasks.length),
  };

  function handleNewTask() {
    setTasks([defaultTask, ...tasks]);
  }

  return (
    <>
      <h1>THE React Todo App</h1>
      <button className="addButton" onClick={handleNewTask}>
        Add New Task
      </button>
      <TaskContext.Provider value={tasks}>
        <ListComponent />
      </TaskContext.Provider>
    </>
  );
}

export default App;

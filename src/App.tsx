import { useState, type SyntheticEvent } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import type Task from "./models/Task";
import { TaskContext } from "./services/TaskContext";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>("");

  function handleNewTask(event: SyntheticEvent) {
    event.preventDefault();
    console.log("event: ", event);
    if (text) {
      const newTask = {
        title: text,
        id: String(tasks.length),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setText("");
    } else {
      alert('Please enter a task in the "Create new task" field');
    }
  }

  return (
    <>
      <h1>THE React To-Do App</h1>
      <div className="add-container">
        <form>
          <label htmlFor="add-task">Create new task:</label>
          <input
            onChange={(event) => setText(event.target.value)}
            value={text}
            type="text"
            id="add-task"
          />
          <button className="addButton" type="submit" onClick={handleNewTask}>
            Add New Task
          </button>
        </form>
      </div>
      <TaskContext.Provider value={tasks}>
        <ListComponent />
      </TaskContext.Provider>
    </>
  );
}

export default App;

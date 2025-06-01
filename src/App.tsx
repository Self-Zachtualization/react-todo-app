import { useState, type SyntheticEvent } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import type Task from "./models/Task";
import { TaskContext } from "./services/TaskContext";
import FilterComponent from "./components/FilterComponent";
import TaskFormComponent from "./components/TaskFormComponent";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tab, setTab] = useState("all");

  function handleNewTask(event: SyntheticEvent, title: string) {
    event.preventDefault();
    if (title) {
      const newTask = {
        title: title,
        id: String(tasks.length),
        completed: false,
      } as Task;
      setTasks([...tasks, newTask]);
    } else {
      alert('Please enter a task in the "Create new task" field');
    }
  }

  function handleDeletions(newTasks: Task[]) {
    setTasks(newTasks);
  }

  function handleTabChange(tab: string) {
    setTab(tab);
  }

  return (
    <>
      <h1>THE React To-Do App</h1>
      <TaskFormComponent handleNewTask={handleNewTask} />
      <FilterComponent handleTabChange={handleTabChange} />
      <TaskContext.Provider value={tasks}>
        <ListComponent
          handleDeletions={handleDeletions}
          handleEdits={handleDeletions}
          tab={tab}
        />
      </TaskContext.Provider>
    </>
  );
}

export default App;
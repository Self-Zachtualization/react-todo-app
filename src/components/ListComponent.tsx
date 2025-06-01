import type Task from "../models/Task";
import { useGetTasks } from "../services/TaskContext";
import TaskComponent from "./TaskComponent";

export default function ListComponent() {
  const taskList = useGetTasks()?.map((task: Task) => (
    <TaskComponent
      key={task.id}
      id={task.id}
      title={task.title}
      completed={task.completed}
    />
  ));

  return (
    <div>
      <h2>To-Do List</h2>
      <ul role="list" className="todo-list">
        {taskList}
      </ul>
    </div>
  );
}

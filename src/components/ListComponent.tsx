import type Task from "../models/Task";
import { useGetTasks } from "../services/TaskContext";
import TaskComponent from "./TaskComponent";

export default function ListComponent() {
  const taskList = useGetTasks()?.map((task: Task) => (
    <TaskComponent id={task.id} title={task.title} key={task.id} />
  ));

  return (
    <div>
      <h2>Todo List</h2>
      <ul role="list" className="todo-list">
        {taskList}
      </ul>
    </div>
  );
}

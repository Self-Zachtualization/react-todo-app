import { useState } from "react";
import type Task from "../models/Task";
import { useGetTasks } from "../services/TaskContext";

export default function TaskComponent(task: Task) {
  const [isEditing, setIsEditing] = useState(false);
  const tasks = useGetTasks();

  function handleEdit(newValue: string | boolean) {
    task.listRegisterEdits(
      tasks.map((thisTask) => {
        if (thisTask.id === task.id) {
          if (typeof newValue === "string") {
            return {
              ...task,
              title: newValue,
            };
          } else {
            return {
              ...task,
              completed: newValue,
            };
          }
        } else {
          return thisTask;
        }
      })
    );
  }

  return (
    <li className="task" key={task.id}>
      <div className="task-item-div">
        <input
          id={task.id}
          type="checkbox"
          checked={task.completed}
          onChange={(event) => handleEdit(event.target.checked)}
        />
        {isEditing ? (
          <input
            value={task.title}
            onChange={(event) => handleEdit(event.target.value)}
          />
        ) : (
          <label htmlFor={task.id}>{task.title}</label>
        )}
      </div>
      <div className="btn-group">
        {isEditing ? (
          <button
            type="button"
            className="btn"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => task.listRegisterDeletions(task.id)}
        >
          Delete
        </button>
      </div>
      <hr></hr>
    </li>
  );
}

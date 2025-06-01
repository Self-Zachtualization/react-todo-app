import { useCallback, useMemo } from "react";
import type Task from "../models/Task";
import { useGetTasks } from "../services/TaskContext";
import TaskComponent from "./TaskComponent";
import { filterTasks } from "../services/Filter";

interface ListComponentType {
  handleDeletions: (newTasks: Task[]) => void;
  handleEdits: (newTasks: Task[]) => void;
  tab: string;
}

export default function ListComponent({
  handleDeletions: handleDeletions,
  handleEdits: handleEdits,
  tab,
}: ListComponentType) {
  const taskList = useGetTasks();
  const visibleTasks = useMemo(
    () => filterTasks(taskList, tab),
    [taskList, tab]
  );
  const callbackDeletions = useCallback(
    (id: string) => {
      handleDeletions([...taskList.filter((task) => task.id !== id)]);
    },
    [handleDeletions, taskList]
  );

  function listRegisterEdits(newTasks: Task[]) {
    handleEdits(newTasks);
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <ul role="list" className="todo-list">
        {visibleTasks.map((task: Task) => (
          <TaskComponent
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            listRegisterDeletions={callbackDeletions}
            listRegisterEdits={listRegisterEdits}
          />
        ))}
      </ul>
    </div>
  );
}

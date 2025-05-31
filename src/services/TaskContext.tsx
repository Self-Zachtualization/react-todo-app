import { createContext, useContext } from "react";
import type Task from "../models/Task";

export const TaskContext = createContext<Task[] | null>(null);

export const useGetTasks = () => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) { throw new Error("useGetTasks must be used within a Provider") }
  return taskContext
}
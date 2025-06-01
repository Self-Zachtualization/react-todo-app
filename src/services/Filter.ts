import type Task from "../models/Task";

export function filterTasks(tasks: Task[], tab: string) {
  return tasks.filter(task => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !task.completed;
    } else {
      return task.completed;
    }
  });
}
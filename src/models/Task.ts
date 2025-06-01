export default interface Task {
  id: string,
  title: string,
  completed: boolean,
  listRegisterDeletions: (id: string) => void,
  listRegisterEdits: (newTasks: Task[]) => void
}
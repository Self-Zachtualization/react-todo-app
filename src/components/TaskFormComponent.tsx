import { useState, type SyntheticEvent } from "react";

interface TaskFormType {
  handleNewTask: (event: SyntheticEvent, title: string) => void
}

export default function TaskFormComponent({handleNewTask}: TaskFormType) {
  const [title, setTitle] = useState<string>("");
  return (
    <div className="add-container">
      <form>
        <label htmlFor="add-task">Create new task:</label>
        <br></br>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          id="add-task"
        />
        <br></br>
        <button className="addButton" type="submit" onClick={(event) => {
            handleNewTask(event, title);
            setTitle('')
          }}>
          Add New Task
        </button>
      </form>
    </div>
  )
}
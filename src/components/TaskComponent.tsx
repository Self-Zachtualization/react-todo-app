import type Task from '../models/Task'

export default function TaskComponent(task: Task) {
  return (
    <li className="task" key={task.id}>
      <div className="task-item-div">
        <input id={task.id} type="checkbox" />
        <label className="task-label" htmlFor={task.id}>
          {task.title}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{task.title}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{task.title}</span>
        </button>
      </div>
    </li>
  )
}
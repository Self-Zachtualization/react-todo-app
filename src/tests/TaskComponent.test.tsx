import { render, screen } from "@testing-library/react";
import TaskComponent from "../components/TaskComponent";
import type Task from "../models/Task";
import { TaskContext } from "../services/TaskContext";

const testTaskList: Task[] = [
  {
    title: "test1",
    id: "1",
    completed: false,
  },
  {
    title: "test0",
    id: "0",
    completed: true,
  },
] as Task[];

test("the task renders", () => {
  render(
    <TaskContext.Provider value={testTaskList}>
      <TaskComponent
        title={testTaskList[0].title}
        id={testTaskList[0].id}
        key={testTaskList[0].id}
        completed={testTaskList[0].completed}
        listRegisterDeletions={testTaskList[0].listRegisterDeletions}
        listRegisterEdits={testTaskList[1].listRegisterEdits}
      />
    </TaskContext.Provider>
  );

  const element = screen.getByText("Edit");

  expect(element).toBeInTheDocument();
});
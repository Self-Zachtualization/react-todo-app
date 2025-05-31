import { render, screen } from "@testing-library/react";
import TaskComponent from "../components/TaskComponent";
import type Task from "../models/Task";

const testTaskList: Task[] = [
  {
    title: 'test1',
    id: '1'
  },
  {
    title: 'test0',
    id: '0'
  }
]

test('the task renders', () => {
  render(<TaskComponent title={testTaskList[0].title} id={testTaskList[0].id} key={testTaskList[0].id} />)

  const element = screen.getByText('Edit')

  expect(element).toBeInTheDocument();
})
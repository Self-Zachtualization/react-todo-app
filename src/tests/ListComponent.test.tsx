import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "../App";

test("the list renders", () => {
  render(<App />);

  const element = screen.getByText("To-Do List");

  expect(element).toBeInTheDocument();
});
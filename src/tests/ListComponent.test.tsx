import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListComponent from '../components/ListComponent'

test('the list renders', () => {
  render(<ListComponent />)

  const element = screen.getByText('Todo List');

  expect(element).toBeInTheDocument();
})
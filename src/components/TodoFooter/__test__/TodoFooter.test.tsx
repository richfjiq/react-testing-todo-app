import { render, screen } from '@testing-library/react';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import TodoFooter from '../TodoFooter';

interface Props {
  numberOfIncompleteTasks: number;
}

const MockTodoFooter: FC<Props> = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test('should render the correct amount of incomplete tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one - to be truthy", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

test("should render 'task' when the number of incomplete tasks is one - to be visible", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

test("should render 'task' when the number of incomplete tasks is one - to contain html", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML('p');
});

test("should render 'task' when the number of incomplete tasks is one - get by test id", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement).toHaveTextContent('1 task left');
});

test("should render 'task' when the number of incomplete tasks is one - not to be falsy", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement).not.toBeFalsy();
});

test("should render 'task' when the number of incomplete tasks is one - element value", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement.innerHTML).toBe('1 task left');
});

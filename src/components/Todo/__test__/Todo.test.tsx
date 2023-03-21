import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  test('should render same text passed into title prop - get by text', () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  test('should render multiple elements - 3 elements', () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping', 'Pet my cat', 'Wash my hands']);
    const divElement = screen.getAllByTestId('task-container');
    expect(divElement.length).toBe(3);
  });

  test('task should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  test('task should have completed class when click', () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});

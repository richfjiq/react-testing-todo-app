import { render, screen, fireEvent } from '@testing-library/react';

import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

describe('AddInput', () => {
  test('Should render input element', () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  test('Should be able to type in input', async () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    expect(inputElement.value).toBe('Go Grocery Shopping');
  });

  test('Should have empty input when add button is clicked', async () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});

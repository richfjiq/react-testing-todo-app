import { FC, useState } from 'react';
import { v4 } from 'uuid';

import './styles.css';
import TodoList from '../TodoList/TodoList';

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

interface Props {
  setTodos: (todos: Todo[]) => void;
  todos: Todo[];
}

const AddInput: FC<Props> = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo('');
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddInput;

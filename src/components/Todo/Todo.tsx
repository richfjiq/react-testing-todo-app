import { FC, useState } from 'react';

import './styles.css';
import AddInput, { Todo as TodoType } from '../AddInput/AddInput';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

const Todo: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;

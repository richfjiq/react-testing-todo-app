import { FC } from 'react';

import './styles.css';
import TodoFooter from '../TodoFooter/TodoFooter';
import { Todo } from '../AddInput/AddInput';

interface Props {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  const updateTask = (id: string) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo, index) => (
            <div
              className={`todo-item ${todo.completed && 'todo-item-active'}`}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
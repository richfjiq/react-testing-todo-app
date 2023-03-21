import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface Props {
  numberOfIncompleteTasks: number;
}

const TodoFooter: FC<Props> = ({ numberOfIncompleteTasks }) => {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
};

export default TodoFooter;

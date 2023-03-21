import { FC } from 'react';
import { Container } from 'react-bootstrap';

import { Todo } from '../../components';

const TodoPage: FC = () => {
  return (
    <div>
      <Container>
        <Todo />
      </Container>
    </div>
  );
};

export default TodoPage;

import { FC } from 'react';
import { Container } from 'react-bootstrap';

import { Followers } from '../../components';

const FollowersPage: FC = () => {
  return (
    <div>
      <Container>
        <Followers />
      </Container>
    </div>
  );
};

export default FollowersPage;

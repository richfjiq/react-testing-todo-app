import { FC } from 'react';

import './styles.css';
import FollowersList from '../FollowersList/FollowersList';
import Header from '../Header/Header';

const Followers: FC = () => {
  return (
    <div className="followers">
      <Header title="Followers" />
      <FollowersList />
    </div>
  );
};

export default Followers;

import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles.css';
import { Result } from '../../interfaces';

const FollowersList: FC = () => {
  const [followers, setFollowers] = useState<Result[]>([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=5');
    setFollowers(data.results);
  };

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-item-${index}`}
            key={index}
          >
            <img src={follower.picture.large} alt="user_photo" />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default FollowersList;

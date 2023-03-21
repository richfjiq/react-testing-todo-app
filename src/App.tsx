import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Banner } from './components';
import { FollowersPage, TodoPage } from './pages';

function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage} />
        <Route strict exact path="/followers" component={FollowersPage} />
      </Switch>
    </div>
  );
}

export default App;

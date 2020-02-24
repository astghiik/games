import React from 'react';
import Gamers from './components/first-letter-last-letter/Gamers';
import GameFLLL from './components/first-letter-last-letter/Game';
import List from './components/first-letter-last-letter/List';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import GameSB from './components/sea-battle/Game';


const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()));

function App(props) {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path='/first-letter-last-letter'>
            <Link to="/" className="text-secondary">
              <FontAwesomeIcon icon={faHome} size="2x" className="m-2"/>
            </Link>
            <Gamers/>
            <GameFLLL/>
            <List/>
          </Route>
          <Route path='/sea-battle'>
            <GameSB />
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Provider>
    </Router>
  )
}

export default App;
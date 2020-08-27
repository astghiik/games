import React from 'react';
import FLLL from './components/first-letter-last-letter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Minesweeper from './components/minesweeper/Game';
import SeaBattle from './components/sea-battle/Game';


const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()));

function App(props) {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path='/first-letter-last-letter'>
            <FLLL />
          </Route>
          <Route path='/sea-battle'>
            <SeaBattle />
          </Route>
          <Route path='/minesweeper'>
            <Minesweeper />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Provider>
    </Router>
  )
}

export default App;
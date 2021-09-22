import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HeyArnold from '../../containers/HeyArnold';
import Detail from '../../containers/Detail';

export default function App() {
  return (
    <Router>
      <h1>Hey Arnold!</h1>
      <Switch>
        <Route
          path="/"
          exact
          render={routerProps => <HeyArnold {...routerProps}/>}
        />
        <Route
          path="/character/:id"
          exact
          render={routerProps => <Detail {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
};


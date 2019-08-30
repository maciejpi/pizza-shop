import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Checkout, Menu } from './pages';
import { NotFound } from './components';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route exact path="/checkout" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;

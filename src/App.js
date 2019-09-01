import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from './components';
import { Checkout, Menu, OrderConfirmation } from './pages';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order-confirmation" component={OrderConfirmation} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;

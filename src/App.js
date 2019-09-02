import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { NotFound } from './components';
import { Checkout, Menu, OrderConfirmation } from './pages';
import GlobalStyle from './styles/global';

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order-confirmation" component={OrderConfirmation} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;

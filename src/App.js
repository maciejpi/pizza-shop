import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound, Header, Layout } from './components';
import { Checkout, Menu, OrderConfirmation } from './pages';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/order-confirmation"
            component={OrderConfirmation}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;

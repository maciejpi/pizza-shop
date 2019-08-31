import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { OrderSummary } from '../components';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = () => {
    setOrderPlaced(true);
  };

  return (
    <>
      {orderPlaced && <Redirect to="/order-confirmation" />}

      <h1>checkout</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit" onSubmit={handleSubmit}>
          Place Order
        </button>
      </form>
      <OrderSummary></OrderSummary>
    </>
  );
};

export default Checkout;

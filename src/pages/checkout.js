import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { ContactDetails, OrderSummary } from '../components';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [contactState, setContactDetails] = useState({
    name: '',
    phone: '',
  });

  const handleContactChange = e => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setOrderPlaced(true);
  };

  return (
    <>
      {orderPlaced && <Redirect to="/order-confirmation" />}

      <h1>checkout</h1>
      <form onSubmit={handleSubmit}>
        <ContactDetails
          handleContactChange={handleContactChange}
          contactState={contactState}
        />

        <button type="submit">Place Order</button>
      </form>
      <OrderSummary></OrderSummary>
    </>
  );
};

export default Checkout;

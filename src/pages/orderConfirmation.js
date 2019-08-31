import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <>
      <h1>Your pizza is on its way</h1>
      <Link to="/">Go back to homepage</Link>
    </>
  );
};

export default OrderConfirmation;

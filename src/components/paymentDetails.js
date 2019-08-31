import React from 'react';

import Input from './input';

const PaymentDetails = props => {
  const {
    paymentState: { cardNumber, expDate, cvvNumber },
    handlePaymentChange,
  } = props;

  return (
    <>
      <h2>Contact Details</h2>

      <label htmlFor="cardNumber">Card Number</label>
      <Input
        type="number"
        name="cardNumber"
        id="cardNumber"
        value={cardNumber}
        onChange={handlePaymentChange}
      />

      <label htmlFor="expDate">Expiry Date</label>
      <Input
        type="text"
        name="expDate"
        id="expDate"
        value={expDate}
        onChange={handlePaymentChange}
      />

      <label htmlFor="cvvNumber">CVV Number</label>
      <Input
        type="number"
        name="cvvNumber"
        id="cvvNumber"
        value={cvvNumber}
        onChange={handlePaymentChange}
      />
    </>
  );
};

export default PaymentDetails;

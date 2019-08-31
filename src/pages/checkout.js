import React, { useState } from 'react';
import { Redirect } from 'react-router';

import {
  AddressDetails,
  ContactDetails,
  OrderSummary,
  PaymentDetails,
} from '../components';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [contactState, setContactDetails] = useState({
    name: '',
    phone: '',
  });
  const [addressState, setAddressDetails] = useState({
    street: '',
    houseNumber: '',
    postCode: '',
    city: '',
  });
  const [paymentState, setPaymentDetails] = useState({
    cardNumber: '',
    expDate: '',
    cvvNumber: '',
  });

  const handleContactChange = e => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactState,
      [name]: value,
    });
  };

  const handleAddressChange = e => {
    const { name, value } = e.target;
    setAddressDetails({
      ...addressState,
      [name]: value,
    });
  };

  const handlePaymentChange = e => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentState,
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

        <AddressDetails
          handleAddressChange={handleAddressChange}
          addressState={addressState}
        />

        <PaymentDetails
          handlePaymentChange={handlePaymentChange}
          paymentState={paymentState}
        />

        <button type="submit">Place Order</button>
      </form>
      <OrderSummary></OrderSummary>
    </>
  );
};

export default Checkout;

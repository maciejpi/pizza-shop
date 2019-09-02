import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import {
  AddressDetails,
  ContactDetails,
  OrderSummary,
  PaymentDetails,
  Header,
} from '../components';
import { validCard } from '../data';
import { deletePizzas } from '../store/actions';
import { Layout } from '../styles/common';

const Checkout = ({ location, match }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.selectedPizzas);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cardError, setCardError] = useState(false);

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

  const isCardValid = (cardObj, testCard) => {
    return Object.keys(testCard).every(key => {
      return cardObj.hasOwnProperty(key) && cardObj[key] === testCard[key];
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!isCardValid(paymentState, validCard)) {
      setCardError(true);
      return;
    }
    setCardError(false);

    const order = {
      orderedFood: [...pizzas],
      customerInfo: {
        ...contactState,
        address: { ...addressState },
      },
      paymentInfo: { ...paymentState },
      orderedFood: [...pizzas],
    };

    console.log(order);
    setOrderPlaced(true);
    dispatch(deletePizzas());
  };

  return (
    <>
      <Header {...match} />
      <Layout>
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
          cardError={cardError}
          handlePaymentChange={handlePaymentChange}
          paymentState={paymentState}
        />

        <button type="submit">Place Order</button>
      </form>
        <OrderSummary {...location} />
      </Layout>
    </>
  );
};

export default Checkout;

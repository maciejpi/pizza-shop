import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components/macro';

import {
  AddressDetails,
  ContactDetails,
  OrderSummary,
  PaymentDetails,
  Header,
  ButtonElement,
} from '../components';
import { validCard } from '../data';
import { deletePizzas } from '../store/actions';
import { Layout } from '../styles/common';
import { mainSectionWidth } from '../styles/variables';

export const Form = styled.form`
  width: ${mainSectionWidth}px;
`;

const Checkout = ({ match }) => {
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
    };

    console.log(order);
    setOrderPlaced(true);
    dispatch(deletePizzas());
  };

  return (
    <>
      <Header {...match} />
      <Layout>
        <main>
          {orderPlaced && <Redirect to="/order-confirmation" />}

          <Form onSubmit={handleSubmit}>
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

            <ButtonElement type="submit">Place Order</ButtonElement>
          </Form>
        </main>

        <OrderSummary {...match} />
      </Layout>
    </>
  );
};

export default Checkout;

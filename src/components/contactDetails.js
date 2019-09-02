import React from 'react';

import Input from './input';

import { inputWidthLarge } from '../styles/variables';
import { FormLabel, FormSectionWrapper } from '../styles/common';

const ContactDetails = props => {
  const {
    contactState: { name, phone },
    handleContactChange,
  } = props;

  return (
    <FormSectionWrapper>
      <h2>Delivery Details</h2>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleContactChange}
        width={inputWidthLarge}
      />
      <FormLabel htmlFor="phone">Phone Number</FormLabel>
      <Input
        type="number"
        name="phone"
        id="phone"
        value={phone}
        onChange={handleContactChange}
        width={inputWidthLarge}
      />
    </FormSectionWrapper>
  );
};

export default ContactDetails;

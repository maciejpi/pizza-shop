import React from 'react';

import Input from './input';

const ContactDetails = props => {
  const { contactState, handleContactChange } = props;

  return (
    <>
      <h2>Contact Details</h2>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        name="name"
        id="name"
        value={contactState.name}
        onChange={handleContactChange}
      />
      <label htmlFor="phone">Phone Number</label>
      <Input
        type="text"
        name="phone"
        id="phone"
        value={contactState.phone}
        onChange={handleContactChange}
      />
    </>
  );
};

export default ContactDetails;

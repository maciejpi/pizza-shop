import React from 'react';

import Input from './input';

const AddressDetails = props => {
  const {
    addressState: { street, houseNumber, postCode, city },
    handleAddressChange,
  } = props;

  return (
    <>
      <h2>Address</h2>
      <label htmlFor="street">Street</label>
      <Input
        type="text"
        name="street"
        id="street"
        value={street}
        onChange={handleAddressChange}
      />

      <label htmlFor="houseNumber">House Number</label>
      <Input
        type="text"
        name="houseNumber"
        id="houseNumber"
        value={houseNumber}
        onChange={handleAddressChange}
      />

      <label htmlFor="postCode">Post Code</label>
      <Input
        type="text"
        name="postCode"
        id="postCode"
        value={postCode}
        onChange={handleAddressChange}
      />

      <label htmlFor="city">City</label>
      <Input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={handleAddressChange}
      />
    </>
  );
};

export default AddressDetails;

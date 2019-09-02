import React from 'react';

import Input from './input';
import {
  inputWidthLarge,
  inputWidthMedium,
  inputWidthSmall,
} from '../styles/variables';
import {
  FormLabel,
  FormSectionWrapper,
  FormElementsWrapper,
} from '../styles/common';

const AddressDetails = props => {
  const {
    addressState: { street, houseNumber, postCode, city },
    handleAddressChange,
  } = props;

  return (
    <FormSectionWrapper>
      <FormElementsWrapper>
        <div>
          <FormLabel htmlFor="street">Street</FormLabel>
          <Input
            type="text"
            name="street"
            id="street"
            value={street}
            onChange={handleAddressChange}
            width={inputWidthLarge}
          />
        </div>

        <div>
          <FormLabel htmlFor="houseNumber">House No</FormLabel>
          <Input
            type="text"
            name="houseNumber"
            id="houseNumber"
            value={houseNumber}
            onChange={handleAddressChange}
            width={inputWidthSmall}
          />
        </div>
      </FormElementsWrapper>

      <FormElementsWrapper>
        <div>
          <FormLabel htmlFor="postCode">Post Code</FormLabel>
          <Input
            type="text"
            name="postCode"
            id="postCode"
            value={postCode}
            onChange={handleAddressChange}
            width={inputWidthMedium}
          />
        </div>

        <div>
          <FormLabel htmlFor="city">City</FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={handleAddressChange}
            width={inputWidthMedium}
          />
        </div>
      </FormElementsWrapper>
    </FormSectionWrapper>
  );
};

export default AddressDetails;

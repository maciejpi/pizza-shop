import React from 'react';
import styled, { css } from 'styled-components/macro';

const StyledInput = styled.input`
  ${props =>
    props.isHidden &&
    css`
      visibility: hidden;
      position: absolute;
    `}
`;

const Input = props => {
  const { name, id, type, value, onChange, checked, isHidden } = props;

  return (
    <>
      <StyledInput
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        isHidden={isHidden}
      />
    </>
  );
};

export default Input;

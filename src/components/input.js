import React from 'react';

const Input = props => {
  const { name, id, type, value, onChange, checked } = props;

  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </>
  );
};

export default Input;

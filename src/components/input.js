import React from 'react';

const Input = props => {
  const { name, id, type, value, onChange } = props;

  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;

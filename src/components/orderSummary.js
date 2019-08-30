import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const pizzas = useSelector(state => state.selectedPizzas);

  return (
    <>
      <h2>order summary</h2>
      {pizzas.length ? (
        <div>
          {pizzas.map(({ price, dough, ingredients }, i) => (
            <>
              <div>name: pizza {i + 1}</div>
              <div>price: {price}</div>
              <div>size: {dough}</div>
              <div>{ingredients.join(', ')}</div>
            </>
          ))}
        </div>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </>
  );
};

export default OrderSummary;

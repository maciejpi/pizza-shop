import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderSummary = ({ pathname }) => {
  const pizzas = useSelector(state => state.selectedPizzas);
  const totalPrice = pizzas.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <>
      <h2>order summary</h2>
      {pizzas.length ? (
        <>
          <div>
            {pizzas.map(({ price, dough, ingredients }, i) => (
              <div key={i}>
                <div>name: pizza {i + 1}</div>
                <div>price: {price}</div>
                <div>size: {dough}</div>
                <div>{ingredients.join(', ')}</div>
              </div>
            ))}
          </div>
          <div>Total: {totalPrice} </div>
        </>
      ) : (
        <p>Your basket is empty.</p>
      )}
      {/* no pointer-events when !pizza.length */}
      {pathname === '/' && <Link to="/checkout">Go to checkout</Link>}
    </>
  );
};

export default OrderSummary;

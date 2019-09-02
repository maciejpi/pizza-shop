import React from 'react';
import { useSelector } from 'react-redux';

import LinkElement from '../linkElement';
import { ItemName, ItemPrice } from '../../styles/common';
import {
  Aside,
  AsideInner,
  SummaryTitle,
  EmptyBasketInfo,
  OrderItem,
  WithIngs,
  TotalPrice,
} from './style';
import { capitalize, currency } from '../../helpers';

const OrderSummary = ({ path, isCheckout }) => {
  const pizzas = useSelector(state => state.selectedPizzas);
  const totalPrice = pizzas.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <Aside>
      <AsideInner>
        {path === '/checkout' && <SummaryTitle>Your order</SummaryTitle>}

        {path === '/' && (
          <LinkElement linkTo="/checkout" isDisabled={!pizzas.length}>
            Go to checkout
          </LinkElement>
        )}

        {pizzas.length ? (
          <>
            <div>
              {pizzas.map(({ price, dough, ingredients }, i) => (
                <OrderItem key={i}>
                  <div>
                    <ItemName>{capitalize(dough)} pizza</ItemName>
                    <WithIngs isHidden={!ingredients.length}>
                      With {ingredients.join(', ')}
                    </WithIngs>
                  </div>
                  <ItemPrice>{currency.format(price)}</ItemPrice>
                </OrderItem>
              ))}
            </div>
            <TotalPrice>
              <ItemPrice>Total</ItemPrice>
              <ItemPrice>{currency.format(totalPrice)}</ItemPrice>
            </TotalPrice>
          </>
        ) : (
          <EmptyBasketInfo>Your basket is empty</EmptyBasketInfo>
        )}
      </AsideInner>
    </Aside>
  );
};

export default OrderSummary;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
  CurrentItemPrice,
  CancelIem,
} from './style';
import { capitalize, currency } from '../../helpers';
import { deletePizza } from '../../store/actions';

const OrderSummary = ({ path, isCheckout, isAligned }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.selectedPizzas);
  const totalPrice = pizzas.reduce((total, pizza) => total + pizza.price, 0);

  const removeItem = i => dispatch(deletePizza(i));

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
                  <CurrentItemPrice>
                    <ItemPrice>{currency.format(price)}</ItemPrice>
                    {path === '/' && (
                      <CancelIem type="button" onClick={() => removeItem(i)}>
                        x
                      </CancelIem>
                    )}
                  </CurrentItemPrice>
                </OrderItem>
              ))}
            </div>
            <TotalPrice>
              <ItemPrice>Total</ItemPrice>
              <ItemPrice isAligned={isAligned}>
                {currency.format(totalPrice)}
              </ItemPrice>
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

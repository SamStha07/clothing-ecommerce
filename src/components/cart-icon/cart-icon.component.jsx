import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';

const CartIcon = () => {
  const dispatch = useDispatch();

  const itemsCount = useSelector((state) => selectCartItemsCount(state));

  const handleToggleCart = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className='cart-icon' onClick={handleToggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsCount}</span>
    </div>
  );
};

export default CartIcon;

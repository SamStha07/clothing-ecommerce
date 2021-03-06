import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from 'src/assets/shopping-bag.svg';
import { toggleCartHidden } from 'src/redux/cart/cart.actions';
import { selectCartItemsCount } from 'src/redux/cart/cart.selectors';

const CartIcon = () => {
  const dispatch = useDispatch();

  const itemsCount = useSelector(selectCartItemsCount);

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

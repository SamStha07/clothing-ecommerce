import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from 'components/custom-button/custom-button.component';
import CartItem from 'components/cart-item/cart-item.component';
import { useSelector } from 'react-redux';

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

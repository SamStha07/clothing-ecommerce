import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toggleCartHidden } from 'src/redux/cart/cart.actions';
import { selectCartItems } from 'src/redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const handleCheckout = async () => {
    await dispatch(toggleCartHidden());
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length === 0 ? (
          <span className='empty-message'>Your cart is empty</span>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        )}
      </div>
      <CustomButton onClick={handleCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

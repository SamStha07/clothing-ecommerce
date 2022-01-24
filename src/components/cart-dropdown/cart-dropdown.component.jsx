import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from 'components/custom-button/custom-button.component';
import CartItem from 'components/cart-item/cart-item.component';
import { selectCartItems } from 'redux/cart/cart.selectors';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from 'redux/cart/cart.actions';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => selectCartItems(state));

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

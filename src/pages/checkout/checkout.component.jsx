import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from 'src/components/checkout-item/checkout-item.component';
import StripeCheckoutButton from 'src/components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from 'src/redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartTotal = useSelector((state) => selectCartTotal(state));

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}

      <div className='total'>
        <span>Total: Rs.{cartTotal}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 - Exp: 01/20 - CVC: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;

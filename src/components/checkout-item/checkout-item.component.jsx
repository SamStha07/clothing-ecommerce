import React from 'react';
import { useDispatch } from 'react-redux';

import './checkout-item.styles.scss';

import {
  addItemToCart,
  removeItem,
  removeItemFromCart,
} from 'redux/cart/cart.actions';

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = item;

  const handleRemove = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='checkout-item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItemToCart(item))}>
          &#10095;
        </div>
      </span>
      <span className='price'>Rs.{price}</span>
      <span onClick={handleRemove} className='remove-button'>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;

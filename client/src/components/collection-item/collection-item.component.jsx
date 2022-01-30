import React from 'react';
import { useDispatch } from 'react-redux';

import { addItemToCart } from 'src/redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { imageUrl, name, price } = item;

  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton
        className='custom-button'
        onClick={handleAddToCart}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

import CustomButton from 'components/custom-button/custom-button.component';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from 'redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;

  const dispatch = useDispatch();

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
      <CustomButton onClick={handleAddToCart} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

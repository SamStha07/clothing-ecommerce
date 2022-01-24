import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addItemToCart } from 'src/redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, routeName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        onClick={() => navigate(`/shop/${routeName}`)}
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

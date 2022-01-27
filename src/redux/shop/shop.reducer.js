// import SHOP_DATA from 'src/pages/shop/shop.data';
import { ShopTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  // loading: false
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopTypes.FETECH_ALL_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;

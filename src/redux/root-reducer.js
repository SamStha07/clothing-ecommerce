import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import directoyReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // only persists cartReducer
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoyReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

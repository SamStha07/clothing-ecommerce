import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// will convert collection objects into array
export const selectCollectionArray = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// ne quick addition, our selectCollection function we just wrote is not memoized due to collectionUrlParam being passed in from our collection component's which is running whenever our state changes and calling a new instance of our selectCollection function. In this case collectionUrlParam is a dynamic argument meaning it can change, so to memoize selectCollection we actually have to memoize the whole function using a memoize helper function. We can leverage the lodash library, specifically their memoize helper function by adding it our packages like so:
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) => {
    // collections[hats], filter using hats keyword from collection object
    return collections[collectionUrlParam];
  })
);

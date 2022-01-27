import { ShopTypes } from './shop.types';

export const fetchAllCollections = (collectionsmap) => ({
  type: ShopTypes.FETECH_ALL_COLLECTIONS,
  payload: collectionsmap,
});

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from 'src/firebase/firebase.utils';
import { ShopTypes } from './shop.types';

export const fetchCollectionStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFail = (errorMessage) => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());

    const collectionRef = firestore.collection('collections');

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFail(error.message)));
  };
};

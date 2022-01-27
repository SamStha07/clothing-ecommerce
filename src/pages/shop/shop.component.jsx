import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from 'src/firebase/firebase.utils';
import { fetchAllCollections } from 'src/redux/shop/shop.actions';

const ShopPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      await dispatch(fetchAllCollections(collectionMap));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Outlet context={[isLoading]} />
    </div>
  );
};

export default ShopPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { fetchCollectionsStartAsync } from 'src/redux/shop/shop.actions';
import { selectIsCollectionFetching } from 'src/redux/shop/shop.selector';

const ShopPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsCollectionFetching);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Outlet context={[isLoading]} />
    </div>
  );
};

export default ShopPage;

import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;

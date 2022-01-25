import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionArray } from 'src/redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const collections = useSelector((state) => selectCollectionArray(state));

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;

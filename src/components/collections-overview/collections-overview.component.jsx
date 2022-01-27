import React from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import { selectCollectionArray } from 'src/redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const [isLoading] = useOutletContext();
  const collections = useSelector((state) => selectCollectionArray(state));

  if (isLoading) return <WithSpinner />;

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;

import React from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';

import './collection.styles.scss';

import { selectCollection } from 'src/redux/shop/shop.selector';
import CollectionItem from 'src/components/collection-item/collection-item.component';
import WithSpinner from 'src/components/with-spinner/with-spinner.component';

const CollectionPage = () => {
  let [isLoading] = useOutletContext();

  const { collectionUrlParam } = useParams();
  const collection = useSelector((state) =>
    selectCollection(collectionUrlParam)(state)
  );

  if (isLoading) return <WithSpinner />;

  return (
    <div className='collection-page'>
      <h2 className='title'>{collection?.title}</h2>
      <div className='items'>
        {collection?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './collection.styles.scss';

import { selectCollection } from 'src/redux/shop/shop.selector';
import CollectionItem from 'src/components/collection-item/collection-item.component';

const CollectionPage = () => {
  const { collectionUrlParam } = useParams();
  const collection = useSelector((state) =>
    selectCollection(collectionUrlParam)(state)
  );

  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

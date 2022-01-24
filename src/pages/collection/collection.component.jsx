import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './collection.styles.scss';

import { selectCollection } from 'src/redux/shop/shop.selector';

const CollectionPage = () => {
  const { categoryId } = useParams();
  const collection = useSelector((state) =>
    selectCollection(categoryId)(state)
  );

  console.log('colections', collection);

  return <div className='collection-page'> collection {collection.title}</div>;
};

export default CollectionPage;

import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {/* filtering only 4 items to show */}
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem routeName={routeName} key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

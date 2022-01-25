import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ section }) => {
  const navigate = useNavigate();

  const { size, imageUrl, title, linkUrl } = section;

  return (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content' onClick={() => navigate(`${linkUrl}`)}>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

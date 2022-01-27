import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from 'src/redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));

  return (
    <div className='directory-menu'>
      {sections?.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Directory;

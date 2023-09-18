import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favCount }) => {
  const favCountNew = favCount;
  return (
    <div className='fav-badge'>
      <span>{favCountNew}</span>
      <FavIcon displayAlert={isFavPhotoExist} selected={true} />
    </div>
  )
};

export default FavBadge;
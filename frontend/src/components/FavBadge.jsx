import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, dataCount }) => {
  return (
    <div className='fav-badge'>
      <span>{dataCount.length}</span>
      <FavIcon displayAlert={isFavPhotoExist} selected={true} dataCount={dataCount.length > 0}/>
    </div>
  ) 
};

export default FavBadge;
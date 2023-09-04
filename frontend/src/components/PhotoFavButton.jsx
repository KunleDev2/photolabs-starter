import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({onClick}) {
  console.log(onClick);
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={onClick}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
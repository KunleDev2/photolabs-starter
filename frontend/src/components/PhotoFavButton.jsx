import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({onClick}) {

  const [isLikedPhoto, setLikePhoto] = useState(false);

  const likedPhoto = () => {
    setLikePhoto(isLikedPhoto);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={isLikedPhoto}/>
        {/* <FavIcon selected={onClick}/> */}
      </div>
    </div>
  );
}

export default PhotoFavButton;
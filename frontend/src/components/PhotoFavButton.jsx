import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const likedPhoto = () => {
    if (props.favs) {
      props.toggleFav(props.photoId);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={likedPhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
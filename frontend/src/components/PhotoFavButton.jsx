import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  console.log("hello",props.favs);

const likedPhoto = () => {
    props.toggleFav(props.photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={likedPhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favs} isModalClicked={props.isModalClicked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
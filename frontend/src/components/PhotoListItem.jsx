import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = (props) => {
  /* Insert React */
  const { photoListItem } = props;

  const photoStyle = {
    display: "flex"
  }

  const handleClick = () => {

  }

  return (
    <div className="photo-list__item">
      <div onClick={handleClick}>
        <PhotoFavButton onClick={true} />
      </div>
      <img src={photoListItem.urls.full} className="photo-list__image" alt="Image Source" /><br></br>
      <div style={ photoStyle }>
        <img src={photoListItem.user.profile} className="photo-list__user-profile" alt="Profile Pic" />
        <div>
          <div className="photo-list__user-info">{photoListItem.user.username}</div>
          <div className="photo-list__user-location">{photoListItem.location.city}, {photoListItem.location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;

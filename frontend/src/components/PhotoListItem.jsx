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
    console.log("I was clicked");
  }

  const openModalClick = () => {
    console.log("I was clicked open modal");
    props.openModal(true, "Hello Clicked");
  }

  return (
    <div className="photo-list__item">
        <PhotoFavButton onClick={handleClick} />
      <img src={photoListItem.urls.full} className="photo-list__image" alt="Image Source" onClick={openModalClick}/><br></br>
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

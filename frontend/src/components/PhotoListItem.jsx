import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = (props) => {
  /* Insert React */
  const { photoListItem } = props;
  if (photoListItem == null) {
  };

  const photoStyle = {
    display: "flex"
  }

  const openModalClick = () => {
    props.openModal(true, photoListItem);
  }

  return (
    <div className="photo-list__item">
        {/* {photoListItem.id} */}
        <PhotoFavButton photoId={photoListItem.id} favs={props.favs} toggleFav={props.toggleFav}/>
      <img src={photoListItem.urls.full} key={photoListItem.id} className="photo-list__image" alt="Image Source" onClick={openModalClick}/><br></br>
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

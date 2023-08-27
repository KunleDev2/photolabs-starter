import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { photoListItem } = props;
  console.log(photoListItem)
  return (
    <div>
      <img src={photoListItem.imageSource} alt="Image Source" />
      <img src={photoListItem.profile} alt="Profile Pic" />
      <div>{photoListItem.username}</div>
      <div>{photoListItem.location.city}, {photoListItem.location.country}</div>
    </div>
  )
};

export default PhotoListItem;

import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      { Array.from(Array(props.photos.length)).map((_, index) => 
      props.photos[index] ? (
      <PhotoListItem 
      key={index} 
      photoListItem={props.photos[index]} 
      openModal={props.openModal}
      />
      ) : (
        <PhotoListItem 
      key={1} 
      photoListItem={props.photos[1]} 
      openModal={props.openModal}
      />
      )) }
    </ul>
  );
};

export default PhotoList;

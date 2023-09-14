import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from "../components/PhotoFavButton"

const PhotoDetailsModal = (props) => {

  console.log(props.isOpen);
  const handleClick = () => {
    props.closeModal(true);
  }

  const photoStyle = {
    display: "flex"
  }

  const imageStyle = {
    height: "100%",
    width: "100%"
  }

  if (!props.isOpen) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleClick} />
      </button>
      <div>
        <PhotoFavButton photoId={props.photoDetails.id} favs={props.favs} toggleFav={props.toggleFav} isModalClicked={props.isOpen}/>
        <img  style={imageStyle} src={props.photoDetails.urls.full} alt="Image Source" />
        <div style={photoStyle} className='photo-details-modal__image'>
          <img src={props.photoDetails.user.profile} className="photo-list__user-profile" alt="Profile Pic" />
          <div>
            <div className="photo-list__user-info">{props.photoDetails.user.username}</div>
            <div className="photo-list__user-location">{props.photoDetails.location.city}, {props.photoDetails.location.country}</div>
          </div>
        </div>
        </div>
        <div className=".photo-details-modal__header">Similar Photos</div>
        <PhotoList photos={props.photoDetails.similar_photos} />
      </div>
  )
};

export default PhotoDetailsModal;

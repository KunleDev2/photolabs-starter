import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from "../components/PhotoFavButton"

const PhotoDetailsModal = (props) => {
  const handleClick = () => {
    props.closeModal(true);
  }

  const photoStyle = {
    display: "flex"
  }

  if (!props.isOpen) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleClick} />
      </button>
      <div>
        <PhotoFavButton />
        <img src={props.photoDetails.urls.full} className="photo-details-modal__image" alt="Image Source" />
        <div style={photoStyle}>
          <img src={props.photoDetails.user.profile} className="photo-list__user-profile" alt="Profile Pic" />
          <div>
            <div className="photo-list__user-info">{props.photoDetails.user.username}</div>
            <div className="photo-list__user-location">{props.photoDetails.location.city}, {props.photoDetails.location.country}</div>
          </div>
        </div>
        {/* <PhotoList photos={props.photoDetails} /> */}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;

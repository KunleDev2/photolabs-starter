import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const handleClick = () => {
    console.log("I want to close");
    console.log(props.photoDetails);
    props.closeModal(true);
  }

  if (!props.isOpen) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleClick}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;

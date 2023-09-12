import React from 'react';
import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState, useEffect } from "react";
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    photoData,
    isPictureModalOpen,
    topicData,
    photoDetailsData,
    // updateToFavPhotoIds,
    getDataPhotosById,
    openPictureModal,
    closePictureModal
  } = useApplicationData();

  return (
    <div className="App">
      {photoData && (<HomeRoute photos={photoData} topics={topicData} openModal={openPictureModal} photoById={getDataPhotosById} />)}
      <PhotoDetailsModal isOpen={isPictureModalOpen} closeModal={closePictureModal} photoDetails={photoDetailsData} />
    </div>
  );
};

export default App;

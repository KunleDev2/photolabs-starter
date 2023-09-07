import React from 'react';

import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState } from "react";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isPictureModalOpen, setIsPictureModalOpen] = useState(false);
  const [photoDetailsData, setphotoDetailsData] = useState(null);

  const openPictureModal = (bool, photoData) => {
    setIsPictureModalOpen(bool);
    setphotoDetailsData(photoData);
  };

  const closePictureModal = () => {
    setIsPictureModalOpen(false);
  };
//   const photos = new Array(3).fill(sampleDataForPhotoListItem);
// console.log(photos);
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openPictureModal}/>
      <PhotoDetailsModal isOpen={isPictureModalOpen} closeModal={closePictureModal} photoDetails={photoDetailsData}/>
    </div>
  );
};

export default App;

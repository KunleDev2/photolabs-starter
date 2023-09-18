import React from 'react';
import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState, useEffect } from "react";
import useApplicationData from 'hooks/useApplicationData';
import FavBadge from 'components/FavBadge';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favs, setFavs] = useState([]);
  const [favCount, setFavCount] = useState(0); // Add state for the count of favorited photos

  const FavPhoto = (photoId) => {
    setFavs(prev => prev.includes(photoId) ? prev.filter(id => id !== photoId) : [...prev, photoId]);
    setFavCount(prev => prev + (favs.includes(photoId) ? -1 : 1)); // Adjust the count
  }

  const {
    photoData,
    isPictureModalOpen,
    topicData,
    photoDetailsData,
    getDataPhotosById,
    openPictureModal,
    closePictureModal
  } = useApplicationData();

  return (
    <div className="App">
      {photoData && (<HomeRoute photos={photoData} topics={topicData} openModal={openPictureModal} photoById={getDataPhotosById} toggleFav={FavPhoto} favs={favs} favCount={favCount} selected={photoDetailsData?.id ? favs.includes(photoDetailsData.id) : false} />)}
      <FavBadge favCount={favCount} />
      <PhotoDetailsModal isOpen={isPictureModalOpen} closeModal={closePictureModal} photoDetails={photoDetailsData} toggleFav={FavPhoto} favs={favs} selected={photoDetailsData?.id ? favs.includes(photoDetailsData.id) : false} />
    </div>
  );
};

export default App;

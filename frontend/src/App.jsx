import React from 'react';
import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState, useEffect } from "react";
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favs, setFavs] = useState([]);
  const [getfavs, setCountFavs] = useState([]);

  const FavPhoto = (photoId) => {
    // if favs [] include photoId copy of the [] and remove the photoId then set favs = copy of [] and then return.
    setFavs(prev => [...prev, photoId]);
    setCountFavs(prev => [...prev, photoId]);
    // setFavs(true);
  }

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
      {photoData && (<HomeRoute photos={photoData} topics={topicData} openModal={openPictureModal} photoById={getDataPhotosById} toggleFav={FavPhoto} favs={favs} dataCount={getfavs}/>)}
      <PhotoDetailsModal isOpen={isPictureModalOpen} closeModal={closePictureModal} photoDetails={photoDetailsData} toggleFav={FavPhoto} favs={favs}/>
    </div>
  );
};

export default App;

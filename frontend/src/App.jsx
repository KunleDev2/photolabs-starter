import React from 'react';
import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState, useEffect } from "react";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isPictureModalOpen, setIsPictureModalOpen] = useState(false);
  const [photoDetailsData, setphotoDetailsData] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const [topicData, setTopicData] = useState(null);

  const openPictureModal = (bool, photoData) => {
    setIsPictureModalOpen(bool);
    setphotoDetailsData(photoData);
  };

  const closePictureModal = () => {
    setIsPictureModalOpen(false);
  };

  useEffect(() => {
    const getDataPhotos = async () => {
      try {
        const resp = await fetch('http://localhost:8001/api/photos');
        const res = await resp.json();
        setPhotoData(res);
      } catch (error) {
        console.error('Error fetching data');
      }
    };

    const getDataTopics = async () => {
      try {
        const resp = await fetch('http://localhost:8001/api/topics');
        const res = await resp.json();
        setTopicData(res);
      } catch (error) {
        console.error('Error fetching data');
      }
    };

    getDataPhotos();
    getDataTopics();
  }, []);

  const getDataPhotosById = (titleId) => {
    const getDataById = async (titleId) => {
      try {
        const resp = await fetch('http://localhost:8001/api/topics/photos/' + titleId);
        const res = await resp.json();
        setPhotoData(res);
      } catch (error) {
        console.error('Error fetching data');
      }
    };

    getDataById(titleId);
  }

  return (
    <div className="App">
      {photoData && (<HomeRoute photos={photoData} topics={topicData} openModal={openPictureModal} photoById={getDataPhotosById} />)}
      {/* <HomeRoute photos={photos} topics={topics} openModal={openPictureModal}/> */}
      <PhotoDetailsModal isOpen={isPictureModalOpen} closeModal={closePictureModal} photoDetails={photoDetailsData} />
    </div>
  );
};

export default App;

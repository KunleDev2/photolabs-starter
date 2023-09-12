import { useReducer, useState, useEffect } from "react";

const useApplicationData = () => {
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

  return { photoData, isPictureModalOpen, topicData, photoDetailsData, getDataPhotosById, openPictureModal, closePictureModal  };
}

export default useApplicationData;
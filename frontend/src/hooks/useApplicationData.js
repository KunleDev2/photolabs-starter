import { useReducer, useState, useEffect } from "react";
const baseApiUrl = 'http://localhost:8001';

const initialState = {
  isPictureModalOpen: false,
  photoDetailsData: null,
  photoData: null,
  topicData: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_PICTURE_MODAL_OPEN':
      return { ...state, isPictureModalOpen: action.payload };
    case 'SET_PHOTO_DETAILS_DATA':
      return { ...state, photoDetailsData: action.payload };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openPictureModal = (bool, photoData) => {
    dispatch({ type: 'SET_IS_PICTURE_MODAL_OPEN', payload: bool });
    dispatch({ type: 'SET_PHOTO_DETAILS_DATA', payload: photoData });
  };

  const closePictureModal = () => {
    dispatch({ type: 'SET_IS_PICTURE_MODAL_OPEN', payload: false });
  };

  useEffect(() => {
    const getDataPhotos = async () => {
      try {
        const resp = await fetch(baseApiUrl + '/api/photos');
        const res = await resp.json();
        dispatch({ type: 'SET_PHOTO_DATA', payload: res });
      } catch (error) {
        console.error('Error fetching data');
      }
    };

    const getDataTopics = async () => {
      try {
        const resp = await fetch(baseApiUrl + '/api/topics');
        const res = await resp.json();
        dispatch({ type: 'SET_TOPIC_DATA', payload: res });
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
        const resp = await fetch(baseApiUrl + '/api/topics/photos/' + titleId);
        const res = await resp.json();
        dispatch({ type: 'SET_PHOTO_DATA', payload: res });
      } catch (error) {
        console.error('Error fetching data');
      }
    };

    getDataById(titleId);
  }

  return { ...state, getDataPhotosById, openPictureModal, closePictureModal  };
}

export default useApplicationData;
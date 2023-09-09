import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import { useState } from "react";

const HomeRoute = (props) => {
  const {photos, topics} = props;

  const [favs, setFavs] = useState(false);

  const FavPhoto = (isFavs) => {
    setFavs(isFavs);
  }

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} photoById={props.photoById} favs={favs}/>
      <PhotoList photos={photos} favs={favs} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;

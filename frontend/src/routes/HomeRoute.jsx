import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import { useState } from "react";

const HomeRoute = (props) => {
  const { photos, topics } = props;

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} photoById={props.photoById} favs={props.favs.length > 0} favCount={props.favCount} />
      <PhotoList photos={photos} toggleFav={props.toggleFav} favs={props.favs} openModal={props.openModal} />
    </div>
  );
};

export default HomeRoute;

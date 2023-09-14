import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const photoStyle = {
    display: "flex"
  }
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div style={ photoStyle }>
        <TopicList topics={ props.topics } photoById={props.photoById}/>
        <FavBadge isFavPhotoExist={ props.favs } dataCount={props.dataCount}/>
      </div>
    </div>
  )
}

export default TopNavigation;
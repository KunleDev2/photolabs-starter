import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const photoStyle = {
    display: "flex"
  }
console.log(props.favs);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div style={ photoStyle }>
        <TopicList topics={ props.topics }/>
        <FavBadge isFavPhotoExist={ props.favs } />
      </div>
    </div>
  )
}

export default TopNavigation;
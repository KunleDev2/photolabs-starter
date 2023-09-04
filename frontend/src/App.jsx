import React from 'react';

import './App.scss';
import './styles/PhotoList.scss';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {
//   const photos = new Array(3).fill(sampleDataForPhotoListItem);
// console.log(photos);
  return (
    <div className="App photo-list">
      {/* {photos.map((hello, index) => (
      <div key={index}>
        <PhotoListItem photoListItem={hello}/>
      </div>
      ))} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;

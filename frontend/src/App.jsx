import React from 'react';

import './App.scss';
import './styles/PhotoList.scss';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
//   const photos = new Array(3).fill(sampleDataForPhotoListItem);
// console.log(photos);
  return (
    <div className="App">
      {/* {photos.map((hello, index) => (
      <div key={index}>
        <PhotoListItem photoListItem={hello}/>
      </div>
      ))} */}
      {/* <TopNavigationBar /> */}
      {/* <PhotoList /> */}
      <HomeRoute />
    </div>
  );
};

export default App;

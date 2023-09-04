import React from 'react';

import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

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
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;

import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  
  console.log(props);
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="top-nav-bar--topic-list">{props.sampleData.title}</span>
    </div>
  );
};

export default TopicListItem;

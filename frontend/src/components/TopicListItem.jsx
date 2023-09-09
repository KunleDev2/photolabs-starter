import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const CategoryTitle = () => {
    props.photoById(props.sampleData.id);
  };

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="top-nav-bar--topic-list" onClick={CategoryTitle}>{props.sampleData.title}</span>
    </div>
  );
};

export default TopicListItem;

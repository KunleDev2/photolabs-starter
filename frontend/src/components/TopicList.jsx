import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {
  const topics = props.topics;
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {/* <TopicListItem sampleDate={sampleDataForTopicList}/> */}
      {Array.from(Array(topics.length)).map((_, index) => <TopicListItem key={index} sampleData={topics[index]} photoById={props.photoById} />)}
    </div>
  );
};

export default TopicList;

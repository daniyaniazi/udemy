import React from "react";

type TopicsProp = {
  topics: {
    category: String;
    topics: {
      name: String;
      noOfStudents: String;
    }[];
  };
};

const Topics = ({ topics }: TopicsProp) => {
  return (
    <div className="topics__container">
      <h3 className="category-title">{topics.category}</h3>
      {topics.topics.map((topic, index) => (
        <div key={index}>
          <p className="topic-name">{topic.name}</p>
          <p className="topic-students">{topic.noOfStudents} Students</p>
        </div>
      ))}
    </div>
  );
};

export default Topics;

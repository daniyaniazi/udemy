import React from "react";

const YtVideo = () => {
  return (
    <div className="video__container">
      <iframe
        width="600"
        height="350"
        src={`https://www.youtube.com/embed/QFIhEmOd6No`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YtVideo;

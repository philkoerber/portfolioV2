"use client";
import React, { useState } from "react";
import Zapper from "./Zapper";
import VideoZapper from "./VideoZapper";

const YoutubePlayer = ({ embedId }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoad = () => {
    console.log("loaded " + embedId);
    setVideoLoaded(true);
  };

  return (
    <div>
      <VideoZapper active={true}>
        <iframe
          width="720"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          onLoad={handleLoad}
        />
      </VideoZapper>
    </div>
  );
};

export default YoutubePlayer;

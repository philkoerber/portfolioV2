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
    <div className="relative pb-[56.25%] overflow-hidden w-full">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default YoutubePlayer;

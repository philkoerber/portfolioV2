import YoutubePlayer from "@/app/utils/YoutubePlayer";
import Zapper from "@/app/utils/Zapper";
import React from "react";

const videos = ["iz7V_IQDy2w", "lemzwlE4ygY", "ZouI8oWW1aA", "65rHnSB0884"];

function Soundtracks(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Zapper>
        <div className="bg-white relative max-w-[800px] w-[100vw] md:w-[45vw] h-full">
          <div className="relative pb-[50%] overflow-hidden w-full">
            <iframe
              src="https://player.vimeo.com/video/838577337?h=fe9aefc9d4"
              className="absolute left-0 top-0 h-full w-full"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </Zapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-3">
        {videos.map((video, i) => {
          return (
            <Zapper>
              <div
                className="relative bg-white max-w-[400px] w-[100vw] md:w-[45vw]"
                key={video + i}>
                <YoutubePlayer embedId={video} />
              </div>
            </Zapper>
          );
        })}
      </div>
    </div>
  );
}

export default Soundtracks;

import YoutubePlayer from "@/app/utils/YoutubePlayer";
import Zapper from "@/app/utils/Zapper";
import React from "react";

const videos = ["dFeT6tuVWM8", "kh_Xm5B1Rx4", "uPCNd95-AWk", "pVCsGuVp9w4"];

function Sets(props) {
  return (
    <Zapper>
      <div className="w-full flex flex-col justify-center items-center mt-5 overflow">
        {videos.map((video, i) => {
          return (
            <div
              className="relative w-full max-w-[500px] h-full p-2 md:p-4 lg:p-8"
              key={video + i}>
              <Zapper>
                <YoutubePlayer embedId={video} />
              </Zapper>
            </div>
          );
        })}
      </div>
    </Zapper>
  );
}

export default Sets;

import YoutubePlayer from "@/app/utils/YoutubePlayer";
import Zapper from "@/app/utils/Zapper";
import React from "react";

const videos = ["dFeT6tuVWM8", "kh_Xm5B1Rx4", "uPCNd95-AWk", "pVCsGuVp9w4"];

function Sets(props) {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 overflow">
      {videos.map((video, i) => {
        return (
          <div className="my-2" key={video + i}>
            <Zapper>
              <YoutubePlayer embedId={video} />
            </Zapper>
          </div>
        );
      })}
    </div>
  );
}

export default Sets;

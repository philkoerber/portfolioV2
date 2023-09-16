import YoutubePlayer from "@/app/utils/YoutubePlayer";
import Zapper from "@/app/utils/Zapper";
import React from "react";

const videos = [
  "dFeT6tuVWM8",
  "kh_Xm5B1Rx4",
  "uPCNd95-AWk",
  "pVCsGuVp9w4",
  "bhUPqQgcQcE",
  "67CTQfS2zvk",
];

function Sets(props) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {videos.map((video, i) => {
          return (
            <Zapper>
              <div
                className="relative bg-white max-w-[400px] w-[100vw] md:w-[45vw] h-full"
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

export default Sets;

import React from "react";

function BandcampPlayer({ albumId, albumLink, title }) {
  const embedUrl = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=ffffff/tracklist=true/transparent=true/`;

  return (
    <div>
      <iframe
        title={title}
        style={{ border: "0", width: "350px", height: "621px" }}
        src={embedUrl}
        seamless>
        <a href={albumLink}>{title}</a>
      </iframe>
    </div>
  );
}

export default BandcampPlayer;

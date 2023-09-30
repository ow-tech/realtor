import React from "react";
import { convertToEmbedLink } from "../../utils/utility";

const VideoComponent = ({ videoUrl, height = 548 }) => {
  const embedLink = convertToEmbedLink(videoUrl);

  return (
    <div>
      <iframe
        title="carouselVideoComponent"
        width="100%"
        height={height}
        src={`${embedLink}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default React.memo(VideoComponent);

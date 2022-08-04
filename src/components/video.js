import React from "react";
import { Player, ControlBar } from "video-react";
import Dev from "../Videos/dev.mp4";
import Dev1 from "../images/dev.webp";
import johnty from "../Videos/johnty-rodes.mp4";
import lara from "../Videos/lara-dutta.mp4";
import sunil from "../Videos/sunil-grover.mp4";
// import "node_modules/video-react/dist/video-react.css";

const Video = () => {
  const videoSrc = Dev;
  const poster = Dev1;
  return (<>
    <div className="player">
      <Player
        playsInline
        src={videoSrc}
        poster={poster}
        width="720"
        height="420"
      />
    </div>
    <p>abc</p>
    </>
  );
};

export default Video;

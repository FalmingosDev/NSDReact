import React from "react";
import ReactPlayer from 'react-player';
import { Player, ControlBar } from "video-react";
import Dev from "../Videos/dev.mp4";
import Dev1 from "../images/dev.webp";
import Container from 'react-bootstrap/Container';
import johnty from "../Videos/johnty-rodes.mp4";
import lara from "../Videos/lara-dutta.mp4";
import sunil from "../Videos/sunil-grover.mp4";
// import "node_modules/video-react/dist/video-react.css";

const Video = () => {
  const videoSrc = Dev;
  const poster = Dev1;
  return (
    // <div className="player">
    <Container>
      <center>
        {/* <Player
          src={videoSrc}
          poster={poster}
          width={400}
          height={300}
          controls={true}
          pip={true}
        /> */}
        
     <ReactPlayer
        classname="vid1"
        url={Dev}
        poster={Dev1}
        controls={true}
        // height={720}
        // width={400}
        pip={true}
        autoplay={true}
      />
      </center>
      </Container>
    // </div>

  );
};

export default Video;

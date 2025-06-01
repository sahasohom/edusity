import React, { useRef } from "react";
import video from "../../assets/college.mp4";
import "./VideoPlayer.css";
const VideoPlayer = ({ playState, setPlayState }) => {
  console.log(playState);
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      ref={player}
      onClick={(e) => closePlayer(e)}
      className={`video-player ${playState ? "" : "hide"}`}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;

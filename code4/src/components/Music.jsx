import React, { useState } from "react";
import Songs from "../assets/Audio/Millionaire_320(PagalWorld.com.sb).mp3";
import ganeshImage from "../assets/Image/ganesh1.jpg";
import "./Music.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Button from "@mui/material/Button";

const Music = () => {
  const [icons, setIcons] = useState(false);

  const handleclick = () => {
    setIcons(!icons);
  };

  return (
    <div>
      <div className="card">
        <img src={ganeshImage} alt="Ganesh" />
        <Button
          variant="text"
          onClick={handleclick}
          color="primary"
          startIcon={icons ? <PlayArrowIcon /> : <PauseIcon />}
        >
          {icons ? "Play" : "Pause"}
        </Button>
        {/* <audio src={Songs} controls></audio> */}
      </div>
    </div>
  );
};

export default Music;

import React, { useState } from "react";
import "./PlayButton.css";

function PlayButton({ children, message, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    if (playing) {
      onPause();
    } else {
      onPlay();
    }

    setPlaying((playing) => !playing);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {children} : {playing ? "⏹️" : "▶️"}
      </button>
    </div>
  );
}

export default PlayButton;

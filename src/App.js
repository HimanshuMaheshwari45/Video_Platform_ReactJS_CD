import "./App.css";
import Video from "./components/Video";
import videosDB from "./data/data";
import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
function App() {
  const [videos, setVideos] = useState(videosDB);

  return (
    <div className="App">
      <h1 className="test">Video.com</h1>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => {
              console.log(`Playing.. ${video.title}`);
            }}
            onPause={() => {
              console.log(`Paused.. ${video.title}`);
            }}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div>
        <AddVideo></AddVideo>
      </div>
    </div>
  );
}

export default App;

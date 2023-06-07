import React from "react";
import "./AddVideo.css";

function AddVideo() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Views" />

        <button
          onClick={() => {
            // setVideos([
            //   ...videos,
            //   {
            //     id: videos.length + 1,
            //     title: "React.js tutorial",
            //     channel: "learn with HM",
            //     views: "100k",
            //     time: "1 day ago",
            //     verified: true,
            //   },
            // ]);
          }}
        >
          Add video
        </button>
      </form>
    </div>
  );
}

export default AddVideo;

// show a video player

import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

	const videoSrc = `http://youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui segment">
				<iframe src={videoSrc} ></iframe>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

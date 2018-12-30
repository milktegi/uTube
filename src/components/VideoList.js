import React  from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVselect }) => {
	// props.videos <= array 
	// create a video item 
	const renderedList = videos.map((video)=>{
		return <VideoItem onVselect={onVselect}video={video}/>;
	})
	return (
		<div className="ui relaxed divided list">
      {renderedList} 
		</div>
	);
}

export default VideoList;
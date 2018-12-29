import React  from 'react';

const VideoList = (props) => {
	// props.videos <= array 

	return (
		<div>
      테스트 {props.videos.length} 개가 배열에 잘 들어와있는지
		</div>
	);
}

export default VideoList;
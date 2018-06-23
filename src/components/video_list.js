import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        //etag is a randomly assigned unique string of characters
        return <VideoListItem key={video.etag} video={video} />
});
    return(
        // sets a bootstrap column to width 4
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
};
export default VideoList;

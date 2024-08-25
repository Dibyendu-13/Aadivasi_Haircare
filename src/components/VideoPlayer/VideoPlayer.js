// VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ src, controls, width, height, onMouseEnter, onMouseLeave }) => (
    <div
        className="video-container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ width, height }} // Apply width and height
    >
        <ReactPlayer
            url={src}
            controls={controls}
            width="100%"
            height="100%"
            playing={false} // Ensure video doesn't play automatically
            muted // Start muted
        />
    </div>
);

export default VideoPlayer;

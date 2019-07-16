import React from 'react';

const Video = (props) => {

    if(!props.video) {
        return (
            <div className="video col-md-8" style={{ backgroundColor: "blue" }}>
                動画読み読み
            </div>
        );
    }
    const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;
    return (
        <div className="video col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={videoURL}></iframe>
          </div>
          <div className="info">           
         </div>
        </div>
    )
}

export default Video;
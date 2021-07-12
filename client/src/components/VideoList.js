import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, getAllVideosWithComments, getVideosFromSearch } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    // const getVideos = () => {
    //     getAllVideos().then(videos => setVideos(videos));
    // };

    const getVideosWithComments = () => {
        getAllVideosWithComments().then(videos => setVideos(videos));
    };

    const handleinput = (e) => {
        let enteredValue = e.target.value;
        getVideosFromSearch(enteredValue).then(videos => setVideos(videos));
    }

    useEffect(() => {
        getVideosWithComments();
    }, []);


    return (
        <>
            <div>
                <input type="text" placeholder="search videos" onChange={handleinput} ></input>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;

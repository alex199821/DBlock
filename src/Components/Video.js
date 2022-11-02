import Wrapper from "../assets/wrappers/VideoWrapper";
import { useQuery } from "@apollo/client";
import { VIDEO } from "../queries";
import React, { useState, useEffect } from "react";
const Video = () => {
  const result = useQuery(VIDEO);
  const [videoSrc, setVideoSrc] = useState([]);

  useEffect(() => {
    result.data && setVideoSrc(result.data.videoSource);
  }, [result]);

  if (videoSrc.video) {
    const { video } = videoSrc;
    return (
      <Wrapper>
        <video width="100%" height="auto" autoPlay muted loop className="video">
          <source src={video} type="video/mp4" />
        </video>{" "}
      </Wrapper>
    );
  }
};
export default Video;

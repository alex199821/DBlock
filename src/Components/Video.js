import Wrapper from "../assets/wrappers/VideoWrapper";
const Video = () => {
  return (
    <Wrapper>
      <video width="100%" height="auto" autoPlay muted loop className="video">
        <source
          src="https://dblock.com/wp-content/uploads/2022/09/16-9_DBLOCK_lowres.mp4"
          type="video/mp4"
        />
      </video>{" "}
    </Wrapper>
  );
};
export default Video;

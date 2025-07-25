import "./sminorff.css";

function Sminorff() {
  return (
    <div className="sminorff-container">
      <video
        className="video"
        src="/media/Sminorff-01.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Sminorff-02.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Sminorff-03.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <video
        className="video"
        src="media/Sminorff-04.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <video
        className="video"
        src="media/Sminorff-05.mp4"
        autoPlay
        loop
        muted
        playsInline
      />{" "}
      <video
        className="video"
        src="media/Sminorff-06.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default Sminorff;

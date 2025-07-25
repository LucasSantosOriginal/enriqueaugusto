import "./Beats.css";

function Gol() {
  return (
    <div className="beats-container">
      <video
        className="video"
        src="/media/3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="/media/Gol-01.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Gol-02.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Gol-03.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Gol-04.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video className="video" autoPlay loop muted playsInline />{" "}
    </div>
  );
}

export default Gol;

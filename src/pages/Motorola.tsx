import "./Beats.css";

function Motorola() {
  return (
    <div className="beats-container">
      <video
        className="video"
        src="/media/Motorola-01.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="/media/Motorola-02.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Motorola-03.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Motorola-04.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Motorola-05.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video className="video" autoPlay loop muted playsInline />{" "}
      <video className="video" autoPlay loop muted playsInline />
    </div>
  );
}

export default Motorola;

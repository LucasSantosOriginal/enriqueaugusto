import "./Beats.css";

function Huggies() {
  return (
    <div className="beats-container">
       <video
        className="video"
        src="/media/Huggies-01.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="/media/Huggies-02.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Huggies-03.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Huggies-04.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="video"
        src="media/Huggies-05.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video className="video" autoPlay loop muted playsInline />{" "}
    </div>
  );
}

export default Huggies;

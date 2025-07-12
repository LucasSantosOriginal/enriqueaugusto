import "./Projects.css";
import { Link } from "react-router-dom";

function Gol() {
  const media = [
    { type: "video", src: "media/3.mp4" },
    { type: "video", src: "media/3.mp4", link: "/gol" }, // link aqui
    { type: "video", src: "media/4.mp4" },
  ];

  return (
    <div className="projects-container">
      <div className="video-collage">
        {media.map((item, i) => (
          <div key={i} className="video-wrapper">
            {item.type === "video" ? (
              item.link ? (
                <Link to={item.link}>
                  <video
                    src={item.src}
                    width="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </Link>
              ) : (
                <video
                  src={item.src}
                  width="100%"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )
            ) : (
              <img src={item.src} alt={`media-${i}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gol;

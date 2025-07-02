import "./Projects.css";

function Projects() {
  const media = [
    { type: "image", src: "media/byd.jpg" },
    // { type: "image", src: "/media/3.jpg" }, // vai receber zoom
    { type: "video", src: "media/3.mp4" },
    { type: "video", src: "media/4.mp4" },
    { type: "video", src: "media/byd-6.mp4" },
    // { type: "video", src: "media/byd-8.mp4" },

    // { type: "image", src: "media/byd-3.jpg" },
    { type: "video", src: "media/byd-11.mp4" },
    { type: "image", src: "media/byd-5.jpg" },
    // { type: "video", src: "media/byd-7.mp4" },
    { type: "video", src: "media/skol-2.mp4" },
    // { type: "video", src: "media/skol-3.mp4" },
    // { type: "video", src: "/media/skol-5.mp4" },
    // { type: "video", src: "/media/skol-6.mp4" },
    { type: "video", src: "media/skol-11.mp4" },
    { type: "video", src: "media/skol-12.mp4" },
  ];

  return (
    <div className="projects-container">
      <div className="video-collage">
        {media.map((item, i) => (
          <div key={i} className="video-wrapper">
            {item.type === "video" ? (
              <video
                src={item.src}
                width="100%"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={item.src}
                alt={`media-${i}`}
                className={item.src === "/media/3.jpg" ? "zoom-image" : ""}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

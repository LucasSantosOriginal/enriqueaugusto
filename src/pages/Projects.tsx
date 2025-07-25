import "./Projects.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const media = [
    { type: "video", src: "media/beats-video-wp.mp4", link: "/beats" },
    { type: "video", src: "media/Smirnoff-wp-video.mp4", link: "/Sminorff" },
    { type: "video", src: "media/3.mp4", link: "/gol" },
    { type: "video", src: "media/Huggies-01.mp4", link: "/Huggies" },
    { type: "video", src: "media/Motorola-01.mp4", link: "/Motorola" },
  ];

  const handleScroll = () => {
    const el = carouselRef.current;
    if (el) {
      const { scrollLeft, clientWidth, scrollWidth } = el;
      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);

      const index = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="projects-container">
      <div className="carousel-wrapper">
        {/* Setas só no desktop */}
        <div className="arrow-container">
          {!atStart && (
            <button className="arrow left desktop-only" onClick={scrollLeft}>
              ‹
            </button>
          )}
          {!atEnd && (
            <button className="arrow right desktop-only" onClick={scrollRight}>
              ›
            </button>
          )}
        </div>

        <div className="video-collage" ref={carouselRef}>
          {media.map((item, i) => (
            <div key={i} className="video-wrapper">
              {item.type === "video" ? (
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
                <img src={item.src} alt={`media-${i}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots fora da carousel-wrapper */}
      <div className="dots mobile-only">
        {media.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

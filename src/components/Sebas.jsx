import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable"; // opcional, para swipe

const companies = [
  {
    name: "Empresa 1",
    logo: "user.svg",
    github: "https://github.com/empresa1",
    website: "https://empresa1.com",
  },
  {
    name: "Empresa 2",
    logo: "nmst.svg",
    github: "https://github.com/empresa2",
    website: "https://empresa2.com",
  },
  {
    name: "Empresa 3",
    logo: "knight.svg",
    github: "https://github.com/empresa3",
    website: "https://empresa3.com",
  },
  {
    name: "Empresa 4",
    logo: "astro.svg",
    github: "https://github.com/empresa4",
    website: "https://empresa4.com",
  },
  // Agrega más empresas según se requiera
];

const delay = 6000;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goNext(),
    onSwipedRight: () => goPrev(),
  });

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? companies.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
  };

  return (
    <div className="carousel-container" {...handlers}>
      <div className="carousel-wrapper">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {companies.map((company, index) => (
            <div className="carousel-item" key={index}>
              <div className="card">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-logo"
                />
                <h3 className="company-name">{company.name}</h3>
                <div className="links-container">
                  <a
                    href={company.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span role="img" aria-label="GitHub">
                      💻
                    </span>{" "}
                    GitHub
                  </a>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span role="img" aria-label="Website">
                      🌐
                    </span>{" "}
                    Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="nav-button prev" onClick={goPrev}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={goNext}>
        &#10095;
      </button>

      <style>{`
        .carousel-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .carousel-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .carousel-inner {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-item {
          min-width: 100%;
          padding: 0 15px;
          box-sizing: border-box;
        }

        .card {
          background: #4e2747;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .company-logo {
          max-width: 200px;
          height: auto;
          margin-bottom: 20px;
          object-fit: contain;
        }

        .company-name {
          color: #fff;
          margin: 15px 0;
          font-size: 1.5rem;
        }

        .links-container {
          display: flex;
          gap: 15px;
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .link-button {
          display: inline-flex;
          align-items: center;
          padding: 12px 25px;
          border-radius: 25px;
          background: #2d3748;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #4a5568;
        }

        .link-button:hover {
          background: #4a5568;
          transform: translateY(-2px);
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          padding: 15px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(5px);
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .prev {
          left: 10px;
        }

        .next {
          right: 10px;
        }

        @media (max-width: 768px) {
          .card {
            padding: 20px;
            min-height: 350px;
          }

          .company-logo {
            max-width: 150px;
          }

          .company-name {
            font-size: 1.2rem;
          }

          .link-button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .nav-button {
            padding: 12px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            padding: 10px;
          }

          .card {
            min-height: 300px;
          }

          .company-logo {
            max-width: 120px;
          }

          .links-container {
            flex-direction: column;
            width: 100%;
          }

          .link-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;

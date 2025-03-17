import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable"; // opcional, para swipe
import "../styles/global.css";
import BotonReact from "./BotonReact.jsx";

const companies = [
  {
    name: "Namaste SPA",
    logo: "PortadaNMT.avif",
    desc: "Esta página web garantiza una experiencia digital atractiva y funcional, alineada con la filosofía de la SPA, potenciando su presencia en línea y facilitando la captación de clientes.",
    github: "https://github.com/empresa1",
    website: "https://empresa1.com",
  },
  {
    name: "EMPRESA 2",
    logo: "proximamente.png",
    desc: "DESCRIPCIÓN DEL PROYECTO",
    github: "https://github.com/empresa2",
    website: "https://empresa2.com",
  },
  {
    name: "EMPRESA 3",
    logo: "proximamente.png",
    desc: "DESCRIPCIÓN DEL PROYECTO",
    github: "https://github.com/empresa3",
    website: "https://empresa3.com",
  },
  {
    name: "EMPRESA 4",
    logo: "proximamente.png",
    desc: "DESCRIPCIÓN DEL PROYECTO",
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
    <div className="relative max-w-5xl mx-auto p-5" {...handlers}>
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {companies.map((company, index) => (
            <div className="min-w-full p-4 box-border" key={index}>
              <div
                className="shadow-gray-800 rounded-2xl p-8 shadow-lg min-h-[400px] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${company.logo})` }}
                alt={company.name}
              >
                {/* <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-[200px] h-auto mb-5 object-contain"
                /> */}
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-black my-4 text-2xl">{company.name}</h3>
                <h4 className="text-black my-4 text-xl">{company.desc}</h4>
                <div className="flex gap-4 mt-5 flex-wrap justify-center">
                  <BotonReact
                    href={company.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800 text-white transition-all duration-300 border border-gray-600 hover:bg-gray-600 transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    GitHub
                  </BotonReact>
                  <BotonReact
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800 text-white transition-all duration-300 border border-gray-600 hover:bg-gray-600 transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="mr-2"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-world"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    Website
                  </BotonReact>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-sky-900  bg-opacity-20 border-none text-white p-4 rounded-full cursor-pointer transition-all duration-300 z-10 backdrop-blur-md hover:bg-opacity-30 hover:scale-110"
        onClick={goPrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-sky-900 bg-opacity-20 border-none text-white p-4 rounded-full cursor-pointer transition-all duration-300 z-10 backdrop-blur-md hover:bg-opacity-30 hover:scale-110"
        onClick={goNext}
      >
        &#10095;
      </button>

      <style>{`
      .h3 {
        font-family: "Space Grotesk Variable";
      }
      span {
        font-family: "Josefin Sans Variable";
      }
      a {
        font-family: "Space Grotesk Variable";
      }
      `}</style>
    </div>
  );
};

export default Carousel;

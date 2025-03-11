import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable"; // opcional, para swipe
import "../styles/global.css";
import BotonReact from "./BotonReact.jsx";

const companies = [
  {
    name: "Landing para la empresa 1",
    logo: "user.svg",
    github: "https://github.com/empresa1",
    website: "https://empresa1.com",
  },
  {
    name: "Landing para la empresa 2",
    logo: "nmst.svg",
    github: "https://github.com/empresa2",
    website: "https://empresa2.com",
  },
  {
    name: "Landing para la empresa 3",
    logo: "knight.svg",
    github: "https://github.com/empresa3",
    website: "https://empresa3.com",
  },
  {
    name: "Landing para la empresa 4",
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
    <div className="relative max-w-5xl mx-auto p-5" {...handlers}>
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {companies.map((company, index) => (
            <div className="min-w-full p-4 box-border" key={index}>
              <div className="bg-gray-700 rounded-2xl p-8 shadow-lg min-h-[400px] flex flex-col items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-[200px] h-auto mb-5 object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-black my-4 text-2xl">{company.name}</h3>
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-20 border-none text-whiterounded-full cursor-pointer text-white z-10 hover:bg-opacity-30 bg-opacity-20 hover:bg-opacity-3bg-black/40 backdrop-blur-lg p-3 rounded-full shadow-lg border border-white/20 flex flex-col justify-between transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:border-white/40"
        onClick={goPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon icon-tabler icons-tabler-filled icon-tabler-caret-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-20 border-none text-white cursor-pointer z-10 hover:bg-opacity-30bg-black/40 backdrop-blur-lg p-3 rounded-full shadow-lg border border-white/20 flex flex-col justify-between transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:border-white/40"
        onClick={goNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon icon-tabler icons-tabler-filled icon-tabler-caret-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
        </svg>
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

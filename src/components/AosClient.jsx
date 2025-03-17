// src/components/AosClient.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosClient = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de las animaciones
      once: false, // Solo se anima una vez
      offset: 120, // Distancia al activarse
    });
  }, []);

  return null; // No renderiza nada en el DOM
};

export default AosClient;

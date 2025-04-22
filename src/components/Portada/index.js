"use client";
import React, { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";


const logos = [
  {  text: "Eficiencia Energética" },
  { text: "Potencia tu futuro" },
  { text: "Ahorrá con energía solar" },
  {  text: "Energia Renovable" },
];

export default function Portada() {
  const scrollContainerRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let velocidad = isSmallScreen ? 0.001 : 0.5;
    
    const scrollLoop = () => {


      if (!scrollContainer) return;
      scrollContainer.scrollLeft += velocidad;
      
      // Si el scroll llega a la mitad del contenido duplicado, lo reseteamos
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      requestAnimationFrame(scrollLoop);
    };

    requestAnimationFrame(scrollLoop);
  }, [isSmallScreen]);

  return (
    <div className={styles.homeCover} ref={scrollContainerRef}>
      <div className={styles.scrollContent}>
        {/* Logos duplicados para crear el efecto de loop infinito */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.logoitem}>
            {/* <Image src={logo.img} alt={`logo-${index}`} /> */}
            <p>{logo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
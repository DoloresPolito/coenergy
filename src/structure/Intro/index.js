"use client";
import React, {useState, useEffect} from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Hero from "../../home/Hero";
import { usePathname } from "next/navigation"; // Importa usePathname
import AboutCover from "../../about/AboutCover"
import HeroV2 from "@/home/HeroV2";

export default function Intro() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Obtén la ruta actual

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    // Check screen size on load
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: true, 
  });

  // Determina la altura y el valor máximo de la transformación Y basado en la ruta
  const isHome = pathname === "/";
  const screenHeight = isHome ? "100vh" : "70vh";
  const yTransformValue = isHome ? "100vh" : "70vh";

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0.3vh", yTransformValue]);
  const y = isMobile ? "0vh" : yTransform;

  // Renderiza Hero o AboutCover dependiendo de la ruta
  const renderHeroComponent = () => {
    if (pathname === "/") return <HeroV2 />;
    if (pathname === "/nosotros") return <AboutCover />;
    return null; // Por si quieres manejar rutas no definidas
  };

  return (
    <div className={styles.screen} ref={container}
    style={{ position: "relative", height: screenHeight }}
    >
      <motion.div
        className={styles.motiondiv}
        style={{ y }}
          ref={container}
      >
          {renderHeroComponent()}
      </motion.div>
    </div>
  );
}

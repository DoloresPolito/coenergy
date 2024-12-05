"use client";
import React, {useState, useEffect} from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Hero from "../../home/Hero";

export default function Intro() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // const y = useTransform(scrollYProgress, [0, 1], ["0.3vh", "100vh"]);

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0.3vh", "100vh"]);
  const y = isMobile ? "0vh" : yTransform;

  return (
    <div className={styles.screen} ref={container}
    style={{ position: "relative" }}
    >
      <motion.div
        className={styles.motiondiv}
        style={{ y }}
          ref={container}
      >
        <Hero />
      </motion.div>
    </div>
  );
}

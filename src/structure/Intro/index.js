"use client";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Hero from "../../home/Hero";

export default function Intro() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: true, 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0.3vh", "100vh"]);

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

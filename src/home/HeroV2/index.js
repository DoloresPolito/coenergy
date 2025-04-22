"use client";
import styles from "./styles.module.scss";
import {slideUp2 } from "./animations";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import SwiperHero from "../SwiperHero";
import Header from "@/structure/Header";

export default function HeroV2() {
  const home = useRef(null);
  const container = useRef();
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"]);



  useEffect(() => {
    gsap.to(titleRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(imageRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className={styles.section} ref={home} id="home">
      <Header />

      <motion.div style={{ y }} className={styles.motionDiv}>
        <motion.div
          className={styles.home}
          variants={slideUp2}
          initial="initial"
          animate="enter"
        >
          <SwiperHero />
        
        </motion.div>
      </motion.div>
    </div>
  );
}

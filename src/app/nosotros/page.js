"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Intro from "@/structure/Intro";
import Description from "@/structure/Description";
import Section from "@/structure/Section";
import AboutAsesoramiento from "@/about/AboutAsesoramiento";
import AboutProcess from "@/about/AboutProcess";
import { motion } from "framer-motion"; 
import BackgroundAbout from "../../../public/images/ases.jpg";
export default function About() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.div className={styles.page}
    initial={{ opacity: 0 }} // Iniciar con opacidad 0
    animate={{ opacity: 1 }} // Animar a opacidad 1
    transition={{ duration: 2 }} // Duración de la animación
    >
      <Intro />
      <Description />
      <AboutAsesoramiento />
      <Section imagepath={BackgroundAbout}/>
      <AboutProcess/>
    </motion.div>
  );
}

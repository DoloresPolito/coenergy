"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import WorkProgressV2 from "@/home/Why";
import LogosMoving from "@/home/LogosMoving";
import Services from "@/home/Services";
import Description from "@/structure/Description";
import Section from "@/structure/Section";
import Projects from "@/home/Projects";
import Products from "@/home/Products";
import { motion } from "framer-motion";
import HeroV2 from "@/home/HeroV2";
import FaqsSection from "@/home/FaqsSection";
import Faqs from "@/home/Faqs";
import ProjectsV2 from "@/home/ProjectsV2";
import BackgroundAbout from "../../public/images/ases.jpg";
import BackgroundHome from "../../public/images/e.png";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }} // Iniciar con opacidad 0
      animate={{ opacity: 1 }} // Animar a opacidad 1
      transition={{ duration: 2 }} // Duración de la animación
    >
      <HeroV2 />
      <Description />
  
      <ProjectsV2 />
 

      <WorkProgressV2 />
      {/* <Faqs/> */}
      {/* <Projects /> */}

      <Services />
      <LogosMoving />
      <Section imagepath={BackgroundHome} />
      {/* <Products /> */}
    </motion.div>
  );
}

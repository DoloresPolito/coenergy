"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import WorkProgressV2 from "@/home/Why";
import LogosMoving from "@/home/LogosMoving";
import Services from "@/home/Services";
import Intro from "@/structure/Intro";
import Description from "@/structure/Description";
import Section from "@/structure/Section";
import AboutProcess from "@/about/AboutProcess";
import Projects from "@/home/Projects";
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
    <div className={styles.page}>
      <Intro />
      <Description />
      <Services />

      <WorkProgressV2 />
      <Projects/>
      {/* <AboutProcess/> */}
      <LogosMoving />
      <Section />
    </div>
  );
}

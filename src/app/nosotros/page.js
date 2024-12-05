"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Intro from "@/structure/Intro";
import Description from "@/structure/Description";
import Section from "@/structure/Section";
import AboutAsesoramiento from "@/about/AboutAsesoramiento";
import AboutProcess from "@/about/AboutProcess";

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
    <div className={styles.page}>
      <Intro />
      <Description />
      <AboutAsesoramiento />
      <Section />
      <AboutProcess/>
    </div>
  );
}

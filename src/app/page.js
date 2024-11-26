
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import Carousel from "@/home/Hero";
import WorkProgressV2 from "@/home/Why";
import LogosMoving from "@/home/LogosMoving";
import AboutHome from "@/home/AboutHome";
import Asesoramiento from "@/home/Asesoramiento";
import Services from "@/home/Services";
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
     <Carousel />
     <AboutHome/>
     <Asesoramiento/>
     <Services/>
     <WorkProgressV2/>
     <LogosMoving/>

    </div>
  );
}

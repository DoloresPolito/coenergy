
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import Carousel from "@/home/Hero";
import WorkProgressV2 from "@/home/Why";
import Footer from "@/structure/Footer";
import LogosMoving from "@/home/LogosMoving";
import AboutHome from "@/home/AboutHome";

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
     <WorkProgressV2/>
     <LogosMoving/>
     <Footer/>
    </div>
  );
}

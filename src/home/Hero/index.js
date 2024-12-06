"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { slideUp, slideUp2, slideUp3 } from "./animation";
import Navbar from "../../structure/Navbar"
import Image from "next/image";
import logo from "../../../public/logo/logo horizontal.png"
import Link from "next/link";

const Carousel = () => {
  const images = [
    "/images/e.png",
    "/images/dcomp.png",
    "/images/bcomp.png",
    // "/images/4.png",
    // "/images/5.png",
    // "/images/6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
          {/* <Navbar /> */}
          <Link href="/">
    
          <div className={styles.header2}>
              <div className={styles.logo}>
               <Image src={logo} alt="logo"   priority />
              </div>
            </div>
            </Link>

      <div className={styles.overlay}>
        <motion.div className={styles.motionDiv}>
          <div className={styles.topcontainer}>
            <motion.div variants={slideUp2} initial="initial" animate="enter">
              {/* <h1>COENERGY SA</h1> */}
              <p>SOLUCIONES RENOVABLES</p>
            </motion.div>
          </div>

          <div className={styles.bottomcontainer}>
            <motion.div
              variants={slideUp}
              initial="initial"
              animate="enter"
              className={styles.textcontainer}
            >
              <p className={styles.results}>
              Energía solar para tu hogar o negocio, eficiente y sostenible.
                {/* Innovamos y creamos <span>soluciones energéticas</span>{" "}
                inteligentes cuidando el <span>medioambiente</span> en busca de
                la mejor experiencia para <span>nuestros clientes.</span> */}
              </p>

              {/* <div className={styles.bottombuttons}>
                <motion.div
                  variants={slideUp2}
                  initial="initial"
                  animate="enter"
                >
                  <div className={styles.buttoncontainer}>
                    <h6>Proyectos</h6>
                  </div>
                </motion.div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

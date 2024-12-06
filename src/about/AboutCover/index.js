"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { slideUp, slideUp2, slideUp3 } from "../../home/Hero/animation";
import Image from "next/image";
import logo from "../../../public/logo/logo horizontal.png";
import Link from "next/link";

const Carousel = () => {
  const images = ["/images/1comp.png"];

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
      <Link href="/">
        <div className={styles.header2}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" priority />
          </div>
        </div>
      </Link>

      <div className={styles.overlay}>
        <motion.div className={styles.motionDiv}>
          <div className={styles.topcontainer}>
            {/* <motion.div variants={slideUp2} initial="initial" animate="enter">
              <p>QIÉNES SOMOS</p>
            </motion.div> */}
          </div>

          <div className={styles.bottomcontainer}>
            <motion.div
              variants={slideUp}
              initial="initial"
              animate="enter"
              className={styles.textcontainer}
            >
              <p className={styles.results}>
                Desde Gualeguaychú, Entre Ríos, Argentina, en COENERGY SA
                ofrecemos soluciones integrales para quienes buscan ahorrar y
                cuidar el medio ambiente.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

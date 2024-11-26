"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { slideUp, slideUp2, slideUp3 } from "./animation";

const Carousel = () => {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
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

      <div className={styles.overlay}>
        <motion.div className={styles.motionDiv}>
          <div className={styles.topcontainer}>
            <motion.div variants={slideUp2} initial="initial" animate="enter">
              <h1>COENERGY SA</h1>
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
                La energía del futuro, en tus manos hoy.
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

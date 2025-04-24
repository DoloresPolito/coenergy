"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";
import blue from "../../../public/icons/blue.png";
import white from "../../../public/icons/white.png";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";
export default function AboutHome() {
  const [isHovered, setIsHovered] = useState(false);

  const phrase =
    "Innovamos y creamos soluciones energéticas inteligentes cuidando el medioambiente en busca de la mejor experiencia para nuestros clientes.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <>
      <div className={styles.section} ref={description}>
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <h4>SOBRE NOSOTROS</h4>
          </div>
          <div className={styles.left}>
            {/* <AnimatedDiv>
              <h6>
                Innovamos y creamos soluciones energéticas inteligentes cuidando
                el medioambiente en busca de la mejor experiencia para nuestros
                clientes.
              </h6>

    
            </AnimatedDiv> */}
            <p>
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <div className={styles.numbercontainer}>
              <div className={styles.item}>
                <h3>7</h3>
                <h5>años de trabajo</h5>
              </div>

              <div className={styles.item}>
                <h3>+105</h3>
                <h5>asesoramientos</h5>
              </div>

              <div className={styles.item}>
                <h3>500</h3>
                <h5>instalaciones</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonwrapper}>
          <Link href="/nosotros">
            <div
              className={styles.buttoncontainer}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p>Más sobre nosotros</p>
              <Image
                src={isHovered ? white : blue}
                alt="flecha"
                className={styles.icon}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

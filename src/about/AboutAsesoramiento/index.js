"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
// import Image from "next/image";
// import blue from "../../../public/icons/blue.png";
// import white from "../../../public/icons/white.png";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "../../home/AboutHome/animation";

export default function AboutAsesoramiento() {
  const [isHovered, setIsHovered] = useState(false);

  const phrase =
  "Nuestro asesoramiento comprende no sólo la necesidad del cliente sino también la optimización de la eficiencia energética en su totalidad.";
const description = useRef(null);
const isInView = useInView(description);

  return (
    <>
      <div className={styles.section} ref={description}>
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <h4>NUESTRA MARCA DISTINTIVA</h4>
            {/* <AnimatedDiv>
            <h6>
            Nuestro asesoramiento comprende no sólo la necesidad del cliente sino también la optimización de la eficiencia energética en su totalidad.
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

            <AnimatedDiv>
            <h5>
            Una etapa fundamental durante el análisis de un proyecto consiste en realizar una visita técnica con el fin de evaluar el nivel de eficiencia energética alcanzado mediante las tecnologías disponibles.<br/> Esto nos permitirá evaluar correctamente la mejor solución de instalaciones fotovoltaicas o de generación térmica.
            
            </h5>
            </AnimatedDiv>
          </div>

         
        </div>
      </div>
    </>
  );
}
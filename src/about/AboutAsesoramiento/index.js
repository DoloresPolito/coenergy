"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
// import Image from "next/image";
// import blue from "../../../public/icons/blue.png";
// import white from "../../../public/icons/white.png";

export default function AboutAsesoramiento() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <h4>NUESTRA MARCA DISTINTIVA</h4>
            <AnimatedDiv>
            <h6>
            Nuestro asesoramiento comprende no sólo la necesidad del cliente sino también la optimización de la eficiencia energética en su totalidad.
            </h6>
            </AnimatedDiv>

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
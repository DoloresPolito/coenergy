"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import AnimatedDiv from "@/app/components/AnimatedDiv";
import Image from "next/image";
import blue from "../../../public/icons/blue.png";
import white from "../../../public/icons/white.png";

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
            A partir de valores tales como la conservación de los recursos naturales, es que hemos replicado nuestro modelo de negocios en otras cuatros provincias de nuestro país. Con presencia en Santa Fe, Buenos Aires, Neuquén y Córdoba, forjamos el futuro con las mejores tecnologías amigables con el medio ambiente.Nuestro objetivo principal es ser líderes en la provisión de soluciones en energías renovables buscando la mejor experiencia para el cliente.
            </h5>
            </AnimatedDiv>
          </div>

         
        </div>
      </div>
    </>
  );
}
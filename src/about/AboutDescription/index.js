"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import AnimatedDiv from "@/app/components/AnimatedDiv";


export default function AboutDescription() {

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <h4>QUIÉNES SOMOS</h4>
            <AnimatedDiv>
            <h6>
            A partir de valores tales como la conservación de los recursos naturales, es que hemos replicado nuestro modelo de negocios en otras cuatros provincias de nuestro país. Con presencia en Santa Fe, Buenos Aires, Neuquén y Córdoba, forjamos el futuro con las mejores tecnologías amigables con el medio ambiente.Nuestro objetivo principal es ser líderes en la provisión de soluciones en energías renovables buscando la mejor experiencia para el cliente.
            </h6>
            </AnimatedDiv>
          </div>

          {/* <div className={styles.numbercontainer}>
            <div className={styles.item1}>
              <h4>MISIÓN</h4>
              <h5>texto mision</h5>
            </div>

            <div className={styles.item2}>
            <h4>VISIÓN</h4>
              <h5>texto vision</h5>
            </div>

          
          </div> */}

         
        </div>
      </div>
    </>
  );
}
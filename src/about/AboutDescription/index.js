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
            A partir de valores tales como la conservación de los recursos naturales, es que hemos replicado nuestro modelo de negocios en otras cuatros provincias de nuestro país. <br/> Con presencia en Santa Fe, Buenos Aires, Neuquén y Córdoba, forjamos el futuro con las mejores tecnologías amigables con el medio ambiente.<br/> <br/> Nuestro objetivo principal es ser líderes en la provisión de soluciones en energías renovables buscando la mejor experiencia para el cliente.
            </h6>
            </AnimatedDiv>
          </div>

          <div className={styles.numbercontainer}>
            <div className={styles.item1}>
              <h4>MISIÓN</h4>
              <h5>Brindar soluciones innovadoras en energías renovables para contribuir a un futuro más sustentable y responsable. Trabajamos para reducir el impacto ambiental, promover el uso eficiente de los recursos naturales y transformar la forma en que las personas y empresas consumen energía, asegurando un legado positivo para las próximas generaciones.</h5>
            </div>

            <div className={styles.item2}>
            <h4>VISIÓN</h4>
              <h5>Convertirnos en líderes destacados en la provisión de soluciones inteligentes en energías renovables, ofreciendo una experiencia excepcional a cada cliente. Nos comprometemos a impulsar un cambio positivo hacia un futuro más sostenible, marcando la diferencia en el cuidado del medio ambiente y la innovación en el sector energético.</h5>
            </div>

          
          </div>

         
        </div>
      </div>
    </>
  );
}
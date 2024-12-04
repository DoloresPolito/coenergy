"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import AnimatedDiv from "@/app/components/AnimatedDiv";
import Image from "next/image";
import blue from "../../../public/icons/blue.png";
import white from "../../../public/icons/white.png";

export default function AboutHome() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <h4>SOBRE NOSOTROS</h4>
            <AnimatedDiv>
            <h6>
              Innovamos y creamos soluciones energéticas inteligentes cuidando
              el medioambiente en busca de la mejor experiencia para nuestros
              clientes.
            </h6>
            </AnimatedDiv>
          </div>

          <div className={styles.numbercontainer}>
            <div className={styles.item}>
              <h3>7</h3>
              <h5>años de trabajo</h5>
            </div>

            <div className={styles.item}>
              <h3>400</h3>
              <h5>instalaciones</h5>
            </div>

            <div className={styles.item}>
              <h3>15</h3>
              <h5>trabajadores</h5>
            </div>
          </div>

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
        </div>
      </div>
    </>
  );
}

{
  /* <div className={styles.right}>
            <AnimatedDiv>
              <p className={styles.p1}>
                Desde Gualeguaychú, Entre Ríos, Argentina, hemos creado COENERGY
                SA con el firme propósito de proveer todas las soluciones
                posibles a clientes que estén tras objetivos como el ahorro y el
                cuidado del medio ambiente.
              </p>
              </AnimatedDiv>

              <p className={styles.p2}>
                A partir de valores tales como la conservación de los recursos
                naturales, es que hemos replicado nuestro modelo de negocios en
                otras cuatros provincias de nuestro país. Con presencia en Santa
                Fe, Buenos Aires, Neuquén y Córdoba, forjamos el futuro con las
                mejores tecnologías amigables con el medio ambiente.Nuestro
                objetivo principal es ser líderes en la provisión de soluciones
                en energías renovables buscando la mejor experiencia para el
                cliente.
              </p>
            </div> */
}

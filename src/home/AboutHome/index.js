"use client";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/app/components/AnimatedDiv";

export default function AboutHome() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h4>SOBRE NOSOTROS</h4>
            <h6>Impulsando hogares y negocios con energía solar.</h6>
          </div>


            <div className={styles.right}>
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
            </div>

        </div>
      </div>
    </>
  );
}

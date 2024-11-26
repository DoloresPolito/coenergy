"use client";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/app/components/AnimatedDiv";
import image from "../../../public/images/asesoramiento.png"
import Image from "next/image";
export default function Asesoramiento() {
  return (
    <>
      <div className={styles.section}>

  
        <div className={styles.container}>
          <div className={styles.left}>
            <h4>ASESORAMIENTO</h4>
            <h6>
              Nuestro asesoramiento comprende no sólo la necesidad del cliente
              sino también la optimización de la eficiencia energética en su
              totalidad.
            </h6>
            <AnimatedDiv>
              <p>
                Una etapa fundamental durante el análisis de un proyecto
                consiste en realizar una visita técnica con el fin de evaluar el
                nivel de eficiencia energética alcanzado mediante las
                tecnologías disponibles. Esto nos permitirá evaluar
                correctamente la mejor solución de instalaciones fotovoltaicas o
                de generación térmica.
              </p>
            </AnimatedDiv>
          </div>

          <div className={styles.right}>
          <div className={styles.imagecontainer}>
        <Image src={image} alt="asesoramiento"/>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

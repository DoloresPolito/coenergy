"use client";
import styles from "./styles.module.scss";

import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";
import asesoria from "../../../public/icons/asesoramiento..png";
import ingenieria from "../../../public/icons/ingenieria.png";
import provision from "../../../public/icons/ingenieria.png";
import instalacion from "../../../public/icons/instalacion.png";

export default function AboutProcess() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <h4>CÓMO TRABAJAMOS</h4>
            <AnimatedDiv>
              <h6>Soluciones diseñadas para maximizar tu ahorro energético</h6>
            </AnimatedDiv>
          </div>

          <div className={styles.itemscontainer}>
            <div className={styles.item}>
              <div className={styles.itemstop}>
                <Image src={asesoria} alt="asesoramiento" />
                <h3>Asesoramiento</h3>
              </div>

              <h5>
                Evaluamos tus necesidades energéticas y te guiamos en la
                elección de la solución solar más adecuada para tu hogar o
                empresa.
              </h5>
            </div>

            <div className={styles.item}>

            <div className={styles.itemstop}>
                <Image src={ingenieria} alt="ingenieria" />
                <h3>Ingeniería</h3>
              </div>
          
              <h5>
                Diseñamos el sistema fotovoltaico con precisión técnica,
                optimizando el rendimiento y asegurando su viabilidad.
              </h5>
            </div>

            <div className={styles.item}>

            <div className={styles.itemstop}>
                <Image src={provision} alt="provision" />
                <h3>Provisión</h3>
              </div>
         
              <h5>
                Suministramos equipos de alta calidad, garantizando eficiencia,
                durabilidad y cumplimiento con los estándares más exigentes.
              </h5>
            </div>
            <div className={styles.item}>

            <div className={styles.itemstop}>
                <Image src={instalacion} alt="instalacion" />
                <h3>Instalación</h3>
              </div>
           
              <h5>
                Realizamos la instalación completa del sistema, asegurando su
                correcto funcionamiento y conexión para un rendimiento óptimo.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

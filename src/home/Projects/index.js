"use client";
import Image from "next/image";
import proyecto1 from "../../../public/images/proyectos/proyecto1.png";
import proyecto2 from "../../../public/images/proyectos/proyecto2.png";
import proyecto3 from "../../../public/images/proyectos/proyecto3.png";
import proyecto4 from "../../../public/images/proyectos/proyecto4.png";

import styles from "./styles.module.scss";
import AnimatedDiv from "@/app/components/AnimatedDiv";

export default function Projects() {
  const items = [
    {
      title: "Proyecto Solar en Parque Industrial ",
      subtitle: "Sistema On-Grid de 110 kW",
      descripcion:
        "Instalación de un sistema solar On-Grid de 110 kW en el Parque Industrial de Gualeguaychú, que reduce la dependencia de la red eléctrica y optimiza costos operativos. Conectado a la red, permite el consumo de la energía generada y la devolución del excedente.",
      image: proyecto1,
    },

    {
      title: "Energía Solar para Institución Educativa ",
      subtitle: "Sistema On-Grid",
      descripcion:
        "Implementación de un sistema On-Grid en un colegio, que reduce el consumo energético y educa a los estudiantes sobre las energías renovables. Este proyecto fomenta la sustentabilidad y reduce los costos energéticos a largo plazo.",
      image: proyecto3,
    },
    {
      title: "Solución Off-Grid para Campo",
      subtitle: "Sistema de Energía Solar Independiente",
      descripcion:
        "Instalación de un sistema Off-Grid en un campo, que proporciona energía autónoma y renovable para iluminación y equipos de trabajo. Permite operar de manera independiente de la red eléctrica, garantizando una fuente confiable y sostenible en áreas rurales.",
      image: proyecto4,
    },

    {
      title: "Bomba Solar para Irrigación en Campo",
      subtitle: "",
      descripcion:
        "Implementación de una bomba solar para riego en un campo agrícola, que mejora la eficiencia en el uso del agua y reduce los costos energéticos. Aprovecha la energía solar para optimizar el consumo y garantizar un suministro constante y económico de agua para las cosechas.",
      image: proyecto2,
    },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h4>PROYECTOS</h4>
          <AnimatedDiv>
            <h6>
              Proyectos solares diseñados para optimizar el consumo energético y
              promover la sustentabilidad en diversos sectores.
            </h6>
          </AnimatedDiv>
        </div>

        <div className={styles.itemscontainer}>
          {items.map((item, id) => (
            <div key={id} className={styles.item}>
              <Image
                src={item.image}
                alt={item.title}
                className={styles.image}
                priority
              />
              <h3>{item.title}</h3>
              <h3>{item.subtitle}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>

   
      </div>
    </div>
  );
}


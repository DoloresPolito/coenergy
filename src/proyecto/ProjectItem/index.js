"use client";
import proyectosData from "../../../src/projects.json";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import Section from "@/structure/Section";
import React from "react";

const ProjectItem = () => {
  const { id } = useParams();
  const proyecto = proyectosData[id];

  if (!proyecto) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topcontainer}>
          <h4>{proyecto.name}</h4>

          <div className={styles.infotop}>
            <div className={styles.info}>
              <h3>SISTEMA / SERVICIO</h3>
              <div className={styles.infobottom}>
                <h4>{proyecto.titulo2}</h4>
              </div>
            </div>

            <div className={styles.info}>
              <h3>TIPO DE INSTALACIÓN</h3>
              <div className={styles.infobottom}>
                <h4>{proyecto.titulo1}</h4>
              </div>
            </div>

            <div className={styles.info}>
              <h3>LOCACIÓN / AÑO</h3>
              <div className={styles.infobottom}>
                <h4>{proyecto.lugar}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* <Section imagepath={image1}/> */}
        <Section imagepath={proyecto.image} />

        <div className={styles.content}>
          <div className={styles.textcontainer}>
            <p>{proyecto.textolargo1}</p>
            <p>{proyecto.textolargo2}</p>
            <p>{proyecto.textolargo3}</p>
          </div>

          {/* <div className={styles.imagecontainer}>
            <div className={styles.carousel}></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

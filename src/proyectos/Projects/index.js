"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import projects from "../../../src/projects.json";



export default function Projects() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h4>PROYECTOS</h4>
          {/* <h6>
            Proyectos diseñados para transformar ideas en soluciones concretas
            que marcan la diferencia.
          </h6> */}
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/proyectos/${project.id}`}
              className={styles.projectLink}
            >
              <div
                className={styles.projectCard}
                onMouseEnter={() => setIsHovered(project.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* <div
                  className={`${styles.overlay} ${
                    isHovered === project.id ? styles.showOverlay : ""
                  }`}
                >
                  <p>Ver más</p>
                </div> */}
                <Image
                  src={project.image}
                  alt={project.titulo1}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3>{project.titulo1}</h3>
                <div className={styles.infobottom}>
                <h4>{project.titulo2}</h4>
                </div>
 
            
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

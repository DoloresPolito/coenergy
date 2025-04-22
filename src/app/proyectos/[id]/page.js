"use client";
import styles from "./styles.module.scss";
import ProjectItem from "@/proyecto/ProjectItem";

const ProyectoPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <ProjectItem />
      </div>
    </div>
  );
};

export default ProyectoPage;

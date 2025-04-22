"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import proyecto1 from "../../../public/images/proyectos/proyecto1.png";
import proyecto2 from "../../../public/images/proyectos/proyecto2.png";
import proyecto3 from "../../../public/images/proyectos/proyecto3.png";
import proyecto4 from "../../../public/images/proyectos/proyecto4.png";
import RoundedButton from "@/components/RoundedButton";

import proyectos from "../../projects.json"
const projects = [
  {
    title: "Industrial",
    src: proyecto1,
    color: "#706D63",
    link: "/",
    text: "Gualeguaychú, Entre Ríos",
  },
  {
    title: "Bombeo Solar",
    src: proyecto2,
    color: "black",
    link: "/",
    text: "Gualeguaychú, Entre Ríos",
  },
  {
    title: "Institución Educativa",
    src: proyecto3,
    color: "#8C8C8C",
    link: "/",
    text: "Gualeguaychú, Entre Ríos",
  },

];

export default function ProjectsV2() {
  return (
    <div className={styles.section} id="projects">
      <h4>ALGUNOS DE NUESTROS PROYECTOS</h4>

      <div className={styles.projectscontainer}>
      {proyectos.slice(1, 4).map((project, i) => (
          <Item key={i} project={project} />
        ))}
      </div>

      <RoundedButton
        text="Ver mas proyectos"
        color="#2D82FF"
        background="transparent"
        border="#2D82FF"
        hoverB="#2D82FF"
        hoverC="white"
        link="/proyectos"
      />
    </div>
  );
}

const Item = ({ project }) => {
  const underlineVariants = {
    initial: {
      width: 0,
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.project}>
      <Link href="/" target="_blank">
        <motion.div
          className={styles.imagecontainer}
          whileHover={{ scale: 0.99 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={460}
            height={300}
          />
        </motion.div>

        <div className={styles.info}>
          <h3>{project.titulo1}</h3>
          <div className={styles.infobottom}>
            <h4>{project.titulo2}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

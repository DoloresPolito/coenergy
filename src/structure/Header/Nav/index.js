import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, slide } from "../animation";
import StyledLink from "../../../components/StyledLink";

import ContactColumnInfo from "@/components/ContactColumnInfo";

export default function Mask() {


  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={styles.body}>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.nav}
          >
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              {/* <StyledLink link="/">
                <p className={`typography-Ag-Camino-Final-H2 ${styles.text}`}>{t("common:nav_home")}</p>
              </StyledLink> */}
            </motion.div>

            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/">
                <p  className={`typography-Ag-Camino-Final-H2 ${styles.text}`}>Inicio</p>
              </StyledLink>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/nosotros">
                <p className={`typography-Ag-Camino-Final-H2 ${styles.text}`}>Sobre Nosotros</p>
              </StyledLink>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="https://www.coenergy.ar/" target="_blank">
                <p className={`typography-Ag-Camino-Final-H2 ${styles.text}`}>Tienda Online</p>
              </StyledLink>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/proyectos">
                <p className={`typography-Ag-Camino-Final-H2 ${styles.text}`}>Proyectos</p>
              </StyledLink>
            </motion.div>

           
          </div>
          <div className={styles.column2}>
            <ContactColumnInfo />
          </div>

         
        </div>
      </motion.div>
    </>
  );
}

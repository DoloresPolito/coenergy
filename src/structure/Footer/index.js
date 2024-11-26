"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
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
    <div className={styles.footer}>
      <div className={styles.leftcontainer}>
        <div className={styles.topleft}>
          <h4>
            La energía del futuro,
            <br /> en tus manos hoy
          </h4>

          <div className={styles.navcontainer}>
            <div className={styles.col}>
              <Link href="/">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>NOSOTROS</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>CONTACTO</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>TIENDA ONLINE</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
            </div>
            {/* <div className={styles.col}>
              <Link href="/">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>PROYECTOS</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>PRODUCTOS</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
            </div> */}
          </div>
        </div>
        <div className={styles.bottom}>
          <p>COENERGY SA ® 2024. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.topright}>
          <Link href="https://www.google.com.ar/maps/place/Magnasco+403+local+1,+E3269+Gualeguaych%C3%BA,+Entre+R%C3%ADos/@-33.0026557,-58.5208642,17z/data=!3m1!4b1!4m5!3m4!1s0x95b007867622e33d:0xadc412ee60a767d1!8m2!3d-33.0026602!4d-58.5182893?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
            <div className={styles.item}>
              <h4>UBICACIÓN</h4>

              <p>Magnasco 403 – Local 1</p>
              <p>Gualeguaychú – Entre Ríos</p>
            </div>
          </Link>

          <Link href="">
            <div className={styles.item}>
              <h4>CONTACTO</h4>
              <p>(+54) 9 3446 367103</p>
              <p> info@coenergysa.com.ar</p>
            </div>
          </Link>
  
            <div className={styles.item}>
              <h4>REDES</h4>
              <p>Facebook</p>
              <p>Instagram</p>
            </div>

        </div>
        <div className={styles.bottom}>{/* <p>Back to top</p> */}</div>
      </div>
      <div className={styles.responsiveBottom}>
        <p>COENERGY SA ® 2024. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

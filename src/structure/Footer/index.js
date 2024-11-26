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
            <div className={styles.col}>
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
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>COENERGY SA ® 2024. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.topright}>
          <Link href="https://www.google.com/maps/place/25+de+Mayo+470,+E3269+Gualeguaych%C3%BA,+Entre+R%C3%ADos/@-33.009176,-58.5120881,17z/data=!3m1!4b1!4m6!3m5!1s0x95baa82b47b097f5:0x3e5fbce29bbffdfc!8m2!3d-33.0091805!4d-58.5095132!16s%2Fg%2F11snpydcpy?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
            <div className={styles.item}>
              <h4>Ubicación</h4>

              <p>Magnasco 403 – Local 1</p>
              <p>Gualeguaychú – Entre Ríos</p>
            </div>
          </Link>

          <Link href="https://www.google.com/maps/place/Av.+Fondo+de+la+Legua+577,+B1609+Boulogne,+Provincia+de+Buenos+Aires/@-34.497962,-58.5475806,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb07b11988783:0x6e57d955a5efd2e7!8m2!3d-34.4979664!4d-58.5450057!16s%2Fg%2F11jtyjgk1q?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
            <div className={styles.item}>
              <h4>Contacto</h4>
              <p>(+54) 9 3446 367103</p>
              <p> info@coenergysa.com.ar</p>
            </div>
          </Link>
  
            <div className={styles.item}>
              <h4>Redes</h4>
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

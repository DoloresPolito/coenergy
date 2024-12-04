"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import insta from "../../../public/icons/insta.png";
import plane from "../../../public/icons/plane.png";

import blue from "../../../public/icons/blue.png";
import white from "../../../public/icons/white.png";
export default function NewFooter() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.cont1}>
              <h4>Ubicación</h4>
              <Link
                href="https://www.google.com.ar/maps/place/Magnasco+403+local+1,+E3269+Gualeguaych%C3%BA,+Entre+R%C3%ADos/@-33.0026557,-58.5208642,17z/data=!3m1!4b1!4m5!3m4!1s0x95b007867622e33d:0xadc412ee60a767d1!8m2!3d-33.0026602!4d-58.5182893?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <p>Magnasco 403 – Local 1</p>
                <p>Gualeguaychú – Entre Ríos</p>
              </Link>
            </div>
            <div className={styles.cont2}>
              <div className={styles.line1}>
                {/* <p>Nosotros</p>
                <p>Servicios</p> */}
                <Link href="https://www.coenergy.ar/" target="_blank">
                  <p>Tienda Online</p>
                </Link>
                <p>Contacto</p>
              </div>

              <div className={styles.line2}>
                <p>COENERGY SA ® 2024. Todos los derechos reservados.</p>
              </div>
            </div>
            <div className={styles.cont3}>
              <Link
                href="https://wa.me/543446367103?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={styles.buttoncontainer}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <p>Contactanos</p>
                  <Image
                    src={isHovered ? white : blue}
                    alt="flecha"
                    className={styles.icon}
                  />
                </div>
              </Link>
              <div className={styles.socialmediacontainer}>
                <Link
                  href="https://www.instagram.com/coenergysa/"
                  target="_blank"
                >
                  <div className={styles.circle}>
                    <Image src={insta} alt="instagram" />
                  </div>
                </Link>
                <Link href="mailto:info@coenergysa.com">
                  <div className={styles.circle}>
                    <Image src={plane} alt="e-mail" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <h1>COENERGY SA</h1>
          </div>
        </div>
      </div>
    </>
  );
}

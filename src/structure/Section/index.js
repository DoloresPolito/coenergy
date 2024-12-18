import Image from "next/image";
import BackgroundHome from "../../../public/images/e.png";
import BackgroundAbout from "../../../public/images/ases.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/app/components/AnimatedDiv";
import { usePathname } from "next/navigation"; // Importa usePathname

export default function Section() {
  const container = useRef();
  const pathname = usePathname(); 
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  

  return (
    <div ref={container} className={styles.section}>
      <div className={styles.content}>
        <AnimatedDiv>
          <p className={styles.firsttext}>
            La energía del futuro, en tus manos hoy.
          </p>
        </AnimatedDiv>
      </div>
      <div className={styles.background}>
        <motion.div style={{ y }} className={styles.motionbackground}>
          <Image src={pathname === "/" ? BackgroundHome : BackgroundAbout} fill alt="image" className={styles.image}    priority />
        </motion.div>
      </div>
    </div>
  );
}

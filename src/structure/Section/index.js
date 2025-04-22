import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import { usePathname } from "next/navigation"; // Importa usePathname
import styles from "./styles.module.scss"

export default function Section({imagepath}) {
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
          <Image src={imagepath} fill alt="image" className={styles.image}    priority />
        </motion.div>
      </div>
    </div>
  );
}

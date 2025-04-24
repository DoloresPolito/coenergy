// "use client";
// import { useEffect } from "react";
// import Lenis from "lenis";
// import styles from "./styles.module.scss";
// import { motion } from "framer-motion";
// import Projects from "@/proyectos/Projects";

// export default function Proyectos() {
//   useEffect(() => {
//     const lenis = new Lenis();

//     function raf(time) {
//       lenis.raf(time);

//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   return (
//     <motion.div
//       className={styles.page}
//       initial={{ opacity: 0 }} // Iniciar con opacidad 0
//       animate={{ opacity: 1 }} // Animar a opacidad 1
//       transition={{ duration: 2 }} // Duración de la animación
//     >
//       <Projects />
//     </motion.div>
//   );
// }

"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Projects from "@/proyectos/Projects";

export default function Proyectos() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 800) {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy(); // Limpieza al desmontar
      };
    }
  }, []);

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Projects />
    </motion.div>
  );
}
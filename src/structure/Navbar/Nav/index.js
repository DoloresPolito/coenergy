'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';



const links = [
  {
    title: "INICIO",
    href: "",

  },
  // {
  //   title: "NOSOTROS",
  //   href: "nosotros",

  // },
  // {
  //   title: "CONTACTO",
  //   href: "contacto",

  // },
  {
    title: "TIENDA",
    href: "https://www.coenergy.ar/",

  },

]

export default function Index({setIsActive}) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive} />

        </div>
      </div>
    </motion.div>
  )
}
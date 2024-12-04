'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from "next/image";
import logo from "../../../../public/logo/logo horizontal negro.png";


const links = [
  {
    title: "INICIO",
    href: "",
    target:"_self"

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
    target:"_blank"

  },

]

export default function Index({setIsActive}) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
       <div className={styles.header2}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.wrapper}>
     
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive} />

        </div>
      </div>
    </motion.div>
  )
}
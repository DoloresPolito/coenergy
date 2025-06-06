"use client";
import { usePathname } from "next/navigation"; 
import styles from "./style.module.scss";
import React, { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity} from "./anim";
import Nav from "./Nav";
import Link from "next/link";
// import Image from "next/image";
// import logo from "../../../public/logo/logo horizontal.png"

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname(); 
  const navdesktop = [
    { id: "1.", title: "INICIO", url: "/", href: "/" },
    { id: "2.", title: "NOSOTROS", url: "/", href: "/nosotros" },
    // { id: "3.", title: "CONTACTO", url: "/contact", href: "/contacto" },
    { id: "4.", title: "TIENDA ONLINE", url: "", href: "https://www.coenergy.ar/" },
  ];
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



  const navColor = pathname === "/" ? "black" : "white";



  return (
    <div className={styles.header}>
      <div className={styles.bar}>

          <div className={styles.logocontainer}>
            {/* <div className={styles.header2}>
              <div className={styles.logo}>
               <Image src={logo} alt="logo"/>
              </div>
            </div> */}
          </div>
      
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
         
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"} style={{color:"black"}}>
            Cerrar
            </motion.p>
          </div>
        </div>

        <div>
          <div className={styles.navcontainerdesktop}>
            {navdesktop.map((link, i) => {
              return (
                <React.Fragment key={i}>
                  <Link href={link.href}>
                    <motion.div className={styles.navitem} whileHover="hover" style={{color:navColor}}>
                      <p className="styled-paragraph">
                        {/* <span className="highlighted">{link.id} </span>{" "} */}
                        {link.title}
                      </p>
                      <motion.div
                          
                        className={styles.underline}
                        variants={underlineVariants}
                        style={{ backgroundColor: navColor }} 
                      />
                    </motion.div>
                  </Link>
                  <div >
                    {" "}
                    <p style={{color:navColor}}>/</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      {/* <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div> */}
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}

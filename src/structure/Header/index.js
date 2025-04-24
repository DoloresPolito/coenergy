"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Mask from "./Nav";
import logo from "../../../public/logo/logoblancochico.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);





  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: /^\/proyectos(\/\d+)?$/.test(pathname)
          ? "rgba(45, 130, 255, 0.8)"
          : "rgba(255, 255, 255, 0)",
      }}
    >
      <div className={styles.container}>
            <div className={styles.logo}>
          <Link href="/">
            {logo && <Image src={logo} alt="logo" priority />}
          </Link>
        </div>
 
        <div className={styles.headerButtonContainerMobile}>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`${styles.button}`}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </button>
        </div>

        <AnimatePresence mode="wait">{isActive && <Mask  onClose={() => setIsActive(false)} />}</AnimatePresence>
      </div>
    </div>
  );
}

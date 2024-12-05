"use client";
import React from "react";
import AboutHome from "@/home/AboutHome";
import styles from "./styles.module.scss";
import AboutDescription from "@/about/AboutDescription";

import { usePathname } from "next/navigation"; // Importa usePathname
export default function Description() {
  const pathname = usePathname(); // Obtén la ruta actual
   // Renderiza Hero o HeroAbout dependiendo de la ruta
   const renderHeroComponent = () => {
    if (pathname === "/") return <AboutHome />;
    if (pathname === "/nosotros") return <AboutDescription />;
    return null; // Por si quieres manejar rutas no definidas
  };

  return (
    <div className={styles.container}>
     {renderHeroComponent()}
    </div>
  );
}

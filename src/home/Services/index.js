"use client";
import Image from "next/image";
import campo from "../../../public/images/services/campo.png";
import hogar from "../../../public/images/services/hogar.png";
import industria from "../../../public/images/services/industria.png";
import styles from "./styles.module.scss";

export default function Services() {
  const items = [
    { name: "HOGARES", descripcion: "Descripción para hogares", logo: "/icons/casa.png", image: hogar },
    { name: "CAMPO", descripcion: "Descripción para el campo", logo: "/icons/hojas.png", image: campo },
    { name: "INDUSTRIAS", descripcion: "Descripción para industrias", logo: "/icons/fabrica.png", image: industria },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h4>SERVICIOS</h4>
          <h6>Soluciones solares para todas las necesidades</h6>
        </div>

        <div className={styles.bottom}>
          {items.map((item, id) => (
            <div key={id} className={styles.item}>
              <div className={styles.overlay}>
                <Image src={item.logo} alt={`${item.name} logo`} width={50} height={50} className={styles.logo} />
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
              </div>
              <Image src={item.image} alt={item.name} className={styles.image} />
              {/* <h3>{item.name}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";
import Image from "next/image";
import campo from "../../../public/images/services/campo.png";
import hogar from "../../../public/images/services/hogar.png";
import industria from "../../../public/images/services/industria.png";
import styles from "./styles.module.scss";

export default function Services() {
  const items = [
    {
      name: "HOGARES",
      descripcion:
        "En tu hogar, la energía también puede ser sinónimo de confort y ahorro. Ofrecemos soluciones como sistemas on-grid, aerotermia, pisos radiantes, calderas y más, diseñadas para hacer tu espacio más eficiente y sostenible. Encuentra la opción perfecta para tus necesidades.",
      logo: "/icons/casa.png",
      image: hogar,
    },
    {
      name: "CAMPO",
      descripcion:
        "El consumo energético en el campo puede ser un desafío, pero también una oportunidad para mejorar. Nuestras bombas solares están diseñadas para optimizar tus costos y ofrecerte una solución sostenible. Contamos con la experiencia para brindarte alternativas a medida que se ajusten a tus necesidades.",
      logo: "/icons/hojas.png",
      image: campo,
    },
    {
      name: "INDUSTRIAS",
      descripcion:
        "En la industria, el costo energético representa una parte significativa de los gastos de producción, y optimizarlo puede marcar la diferencia. Analizamos tus necesidades específicas para ofrecerte soluciones personalizadas que reduzcan costos y aumenten la eficiencia. Nuestro objetivo es brindarte tecnología de vanguardia para que tu negocio sea más competitivo y sostenible.",
      logo: "/icons/fabrica.png",
      image: industria,
    },
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
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={50}
                  height={50}
                  className={styles.logo}
                />
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
              </div>
              <Image
                src={item.image}
                alt={item.name}
                className={styles.image}
              />
              {/* <h3>{item.name}</h3> */}
            </div>
          ))}
        </div>

        <div className={styles.bottommobile}>
          <MobileBottom items={items}/>
        </div>
      </div>
    </div>
  );
}

const MobileBottom = ({items}) => {
  return (
    <>

        {items.map((item, id) => (
          <div key={id} className={styles.itemmobile}>
                   <Image src={item.image} alt={item.name} className={styles.image} />
            {/* <Image
              src={item.logo}
              alt={`${item.name} logo`}
              width={50}
              height={50}
              className={styles.logo}
            /> */}
            <h3  >{item.name}</h3>
            <p >{item.descripcion}</p>

     
          </div>
        ))}

    </>
  );
};

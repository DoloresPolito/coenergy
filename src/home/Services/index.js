"use client";
import Image from "next/image";
import campo from "../../../public/images/services/campo1.png";
import hogar from "../../../public/images/services/casas1.png";
import industria from "../../../public/images/services/industria1.png";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/app/components/AnimatedDiv";

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
      name: "INDUSTRIAS",
      descripcion:
        "En la industria, la energía representa un costo importante en la producción. Optimizar su uso puede reducir gastos y mejorar la eficiencia. Evaluamos tus necesidades para ofrecer soluciones adaptadas que te ayuden a ahorrar y a ser más competitivo y sustentable.",
      logo: "/icons/fabrica.png",
      image: industria,
    },
    {
      name: "CAMPO",
      descripcion:
        "El consumo energético en el campo puede ser un desafío, pero también una oportunidad para mejorar. Nuestras bombas solares están diseñadas para optimizar tus costos y ofrecerte una solución sostenible. Contamos con la experiencia para brindarte alternativas a medida que se ajusten a tus necesidades.",
      logo: "/icons/hojas.png",
      image: campo,
    },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h4>SERVICIOS</h4>
          <AnimatedDiv>

     
          <h6>Soluciones solares para todas las necesidades</h6>
          </AnimatedDiv>
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

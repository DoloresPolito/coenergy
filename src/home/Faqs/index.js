"use client";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";

import FaqsSection from "../FaqsSection";
export default function Faqs() {
  const items = [
    {
      index: "01",
      title: "Ahorro de costos",
      text: "Reduce tus facturas de energía con una inversión a largo plazo en energía solar, permitiéndote disfrutar de ahorros significativos mes tras mes mientras utilizas una fuente de energía limpia y renovable.",
    },
    {
      index: "02",
      title: "Sustentabilidad",
      text: "Reduce tu huella de carbono y contribuye a un planeta más verde al optar por energía solar, una solución ecológica que protege los recursos naturales y promueve un futuro más sostenible.",
    },
    {
      index: "03",
      title: "Valor agregado a la propiedad",
      text: "Incrementa el valor de tu hogar o negocio instalando energía solar, una mejora que no solo ahorra costos energéticos, sino que también atrae compradores conscientes del medio ambiente.",
    },
    {
      index: "04",
      title: "Bajo mantenimiento",
      text: "Disfruta de los beneficios de la energía solar con un sistema que requiere un mantenimiento mínimo, garantizando un rendimiento eficiente y confiable durante años con poco esfuerzo.",
    },
  ];

  return (
    <>
      <div className={styles.section} id="work">
        <div className={styles.container}>
          <div className={styles.left}>
            <h4>FAQS</h4>
            <AnimatedDiv>

          
            <h6>¿Por qué elegir energÍa solar?</h6>
            </AnimatedDiv>
          </div>

          <div className={styles.right}>
            {/* {items.map((item, i) => {
              return (
                <Item key={i} item={item} isLast={i === items.length - 1} />
              );
            })} */}
            <FaqsSection/>
          </div>
        </div>
      </div>
    </>
  );
}

const Item = ({ item, isLast}) => {
  return (
    <>
      <div className={`${styles.item} ${isLast ? styles.lastItem : ""}`} key={item.index}>
        <div className={styles.indexcontainer}>
          <h2>{item.index}</h2>
        </div>
        <div className={styles.titlecontainer}>
          <h4>{item.title}</h4>
        </div>

        <div className={styles.textcontainer}>
          <AnimatedDiv>
            <p>{item.text}</p>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
};

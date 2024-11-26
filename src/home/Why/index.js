"use client";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/app/components/AnimatedDiv";

export default function WorkProgressV2() {
  const items = [
    {
      index: "01",
      title: "Ahorro de costos",
      text: "Reduce tus facturas de energía con una inversión a largo plazo en energía solar.",
    },
    {
      index: "02",
      title: "Sustentabilidad",
      text: "Reduce tu huella de carbono y contribuye a un planeta más verde.",
    },
    {
      index: "03",
      title: "Valor agregado a la propiedad",
      text: "Reduce tus facturas de energía con una inversión a largo plazo en energía solar.",
    },
    {
      index: "04",
      title: "Bajo mantenimiento",
      text: "Reduce tus facturas de energía con una inversión a largo plazo en energía solar.",
    },
  ];

  return (
    <>
      <div className={styles.section} id="work">
        {items.map((item, i) => {
          return <Item key={i} item={item} isLast={i === items.length - 1}/>;
        })}
      </div>
    </>
  );
}

const Item = ({ item, isLast }) => {
  return (
    <>

      <div className={`${styles.item} ${isLast ? styles.lastItem : ''}`}>
        
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